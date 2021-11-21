import React, { useEffect } from "react";
import { ilustrasiDua, ilustrasiSatu, ilustrasiTiga } from "../../assets";
import "./HimbauanProkes.scss";

const FirstCard = () => {
  return (
    <div className="card_outer_container">
      <div className="image_container">
        <img src={ilustrasiSatu} alt={"ilustrasi masker"} />
      </div>
      <div className="card_desc_container">
        <div className="card_desc_header">
          <h3>Pakailah masker!</h3>
        </div>
        <div className="card_desc_detail">
          <p>
            Masker perlu digunakan untuk melindungi diri dari droplet yang
            dikeluarkan oleh orang lain agar tidak masuk ke hidung dan mulut
            kita ataupun sebaliknya.
          </p>
        </div>
      </div>
    </div>
  );
};

const SecondCard = () => {
  return (
    <div className="card_outer_container">
      <div className="image_container">
        <img src={ilustrasiDua} alt={"ilustrasi cuci tangan"} />
      </div>
      <div className="card_desc_container">
        <div className="card_desc_header">
          <h3>Cuci tanganmu!</h3>
        </div>
        <div className="card_desc_detail">
          <p>
            Selalu cuci tanganmu sebelum dan sesudah melakukan aktivitas, karena
            kuman dan virus tersebar di mana-mana walaupun mereka tak kasat
            mata.
          </p>
        </div>
      </div>
    </div>
  );
};

const ThirdCard = () => {
  return (
    <div className="card_outer_container_tiga">
      <div className="image_container">
        <img src={ilustrasiTiga} alt={"ilustrasi masker"} />
      </div>
      <div className="card_desc_container_tiga">
        <div className="card_desc_header">
          <h3>
            Lakukan <i>social distancing</i>!
          </h3>
        </div>
        <div className="card_desc_detail">
          <p>
            Jaga jarak secara fisik dengan orang di sekitarmu dengan jarak
            minimal 1 meter agar tidak mudah tertular virus Covid-19.
          </p>
        </div>
      </div>
    </div>
  );
};

const HimbauanProkes = () => {
  useEffect(() => {
    document.title = "Himbauan Prokes - Covid Test App";
  }, []);
  return (
    <div>
      <h2 className="hp_pg_header">Protokol Kesehatan</h2>
      <p className="hp_pg_subheader">
        Ikuti protokol berikut agar terhindar dari paparan Covid-19!
      </p>
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
  );
};

export default HimbauanProkes;
