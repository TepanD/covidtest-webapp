import React from "react";
import { NavLink } from "react-router-dom";
import "./DiagnosisResult.scss";
import { Icon } from "@iconify/react";

const DiagnosisResult = () => {
  const questionAnswers = JSON.parse(
    window.sessionStorage.getItem("diagnosis_answers")
  );

  return (
    <div className="r_outer_container">
      <div className="r_inner_container">
        <p className="r_diagnosis_result">
          Berdasarkan hasil diagnosis, Anda termasuk kategori{" "}
          <strong>OTG</strong> (Orang Tanpa Gejala)
        </p>
        {/* <hr/> */}
        <ul className="r_description">
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
            Apakah Anda memiliki riwayat imun tubuh lemah / immunocompromised /
            kelainan pada imun tubuh?{" "}
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
            Apakah Anda memiliki riwayat perjalanan ke negara tempat penyakit
            Covid-19 menyebar dalam 14 hari sebelum (diduga) gejala pertama?{" "}
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
            Apakah Anda seorang petugas kesehatan yang mendapatkan gejala yang
            sama dengan pasien pengidap ISPA yang telah Anda rawat tanpa
            penyebab yang jelas?{" "}
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
            Apakah Anda melakukan kontak dengan pasien yang terkonfirmasi atau
            terduga Covid-19 dalam waktu 14 hari sebelum gejala pertama?{" "}
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
