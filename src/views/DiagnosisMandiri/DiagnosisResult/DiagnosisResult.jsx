import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./DiagnosisResult.scss";
import { Icon } from "@iconify/react";

const DiagnosisResult = () => {
  const history = useHistory();
  const [result, setResult] = useState("");

  const questionAnswers = JSON.parse(
    window.sessionStorage.getItem("diagnosis_answers")
  );

  useEffect(() => {
    document.title = "Hasil Diagnosis - Covid Test App";
    if (history.location.state === undefined) {
      history.push("/diagnosis-mandiri");
    } else if (history.location.state["validation_result"] !== true) {
      history.push("/diagnosis-mandiri");
    } else if (questionAnswers === null) {
      history.push("/diagnosis-mandiri");
    } else {
      if (
        questionAnswers["question_one"] &&
        questionAnswers["question_two"] &&
        questionAnswers["question_three"] &&
        questionAnswers["question_four"] &&
        questionAnswers["question_five"] &&
        questionAnswers["question_six"] &&
        questionAnswers["question_seven"] &&
        questionAnswers["question_eight"] &&
        questionAnswers["question_nine"] &&
        questionAnswers["question_ten"] &&
        questionAnswers["question_eleven"] &&
        questionAnswers["question_twelve"]
      ) {
        setResult("PDP");
      } else if (
        questionAnswers["question_one"] &&
        questionAnswers["question_three"] &&
        questionAnswers["question_seven"]
      ) {
        setResult("ODP");
      } else if (
        questionAnswers["question_one"] &&
        (questionAnswers["question_two"] ||
          questionAnswers["question_three"] ||
          questionAnswers["question_four"]) &&
        questionAnswers["question_five"]
      ) {
        setResult("PDP");
      } else if (
        (questionAnswers["question_one"] &&
          (questionAnswers["question_two"] ||
            questionAnswers["question_three"] ||
            questionAnswers["question_four"]) &&
          questionAnswers["question_six"]) ||
        questionAnswers["question_eight"]
      ) {
        setResult("PDP");
      } else if (
        questionAnswers["question_nine"] &&
        (questionAnswers["question_ten"] ||
          questionAnswers["question_eight"] ||
          questionAnswers["question_twelve"] ||
          (questionAnswers["question_seven"] &&
            questionAnswers["question_one"]))
      ) {
        setResult("PDP");
      } else {
        setResult("");
      }
    }
  }, []);

  return (
    <div className="r_outer_container">
      <div className="r_inner_container">
        <p className="r_diagnosis_result">
          Berdasarkan hasil diagnosis, Anda
          {result === "ODP" ? (
            <span>
              {" "}
              termasuk kategori <strong>ODP</strong> (Orang Dalam Pemantauan)
            </span>
          ) : result === "PDP" ? (
            <span>
              {" "}
              termasuk kategori <strong>PDP</strong> (Pasien Dalam Pengawasan)
            </span>
          ) : (
            <span>
              {" "}
              <strong>tidak memerlukan pengawasan</strong>
            </span>
          )}
        </p>
        {/* <hr/> */}
        <ul className="r_description">
          {questionAnswers === null ? (
            ""
          ) : (
            <>
              <li>
                Apakah suhu Anda di atas 38&#176; celcius?{" "}
                {questionAnswers["question_one"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda memiliki gejala batuk-batuk?{" "}
                {questionAnswers["question_two"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda memiliki gejala flu?{" "}
                {questionAnswers["question_three"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda merasakan sakit pada tenggorokan?{" "}
                {questionAnswers["question_four"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda memiliki riwayat penyakit pneunomia?{" "}
                {questionAnswers["question_five"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda memiliki riwayat imun tubuh lemah /
                immunocompromised / kelainan pada imun tubuh?{" "}
                {questionAnswers["question_six"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda memiliki riwayat perjalanan ke negara tempat
                penyakit Covid-19 menyebar dalam 14 hari sebelum (diduga) gejala
                pertama?{" "}
                {questionAnswers["question_seven"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda seorang petugas kesehatan yang mendapatkan gejala
                yang sama dengan pasien pengidap ISPA yang telah Anda rawat
                tanpa penyebab yang jelas?{" "}
                {questionAnswers["question_eight"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda memiliki riwayat penyakit ISPA?{" "}
                {questionAnswers["question_nine"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda melakukan kontak dengan pasien yang terkonfirmasi
                atau terduga Covid-19 dalam waktu 14 hari sebelum gejala
                pertama?{" "}
                {questionAnswers["question_ten"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda memiliki riwayat kontak dengan hewan yang sudah
                teridentifikasi terinfeksi Covid-19?{" "}
                {questionAnswers["question_eleven"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
              <li>
                Apakah Anda pernah mengujungi fasilitas kesehatan publik yang
                memiliki kasus terkonfirmasi atau terduga virus Covid-19?{" "}
                {questionAnswers["question_twelve"] ? (
                  <span className="r_true_styling">
                    Ya <Icon icon="akar-icons:check" color="#006801" />
                  </span>
                ) : (
                  <span className="r_false_styling">
                    Tidak <Icon icon="maki:cross" color="#c90000" />
                  </span>
                )}
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="r_bttm_link">
        <NavLink to="/diagnosis-mandiri">
          Klik di sini untuk mengulang tes diagnosis
        </NavLink>
      </div>
    </div>
  );
};

export default DiagnosisResult;
