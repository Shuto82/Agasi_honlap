import React from "react";
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SavingsIcon from '@mui/icons-material/Savings';

export const Contact = () => {
  return (
    <div className="shadow rounded row">
      <div className="col-md-6 col-sm-12">
      <h2 className="m-3 gap-1"><ContactPhoneTwoToneIcon className="fs-1 m-1" color="success"></ContactPhoneTwoToneIcon>Telefon</h2>
        <p className="fs-5 m-2">
          Adamek Norbert, lelkész: +36308470769
        </p>
        <p className="fs-5 m-2">
          Polgár Péter Pál, főgondnok: +3630
        </p><br />
        <h2 className="m-3"><AlternateEmailTwoToneIcon className="fs-1 m-1" color="success"></AlternateEmailTwoToneIcon>E-mail</h2>
        <p className="fs-5 m-2">agasegyhaza@reformatus.hu</p><br />
        <h2 className="m-3"><FacebookOutlinedIcon className="fs-1 m-1" color="success"></FacebookOutlinedIcon>Facebook</h2>
        <p className="fs-5 m-2"><a href="https://www.facebook.com/profile.php?id=100072184001086" target="_blank">Ide kattintva elérhető</a></p><br />
        <h2 className="m-3"><SavingsIcon className="fs-1 m-1" color="success"></SavingsIcon>Bankszámlaszám</h2>
        <p className="fs-5 m-2">52500147-11053246 (MBH Bank Zrt.)</p>
      </div>
      <div className="col-md-6 col-sm-12">
        <h2 className="m-3"><MapOutlinedIcon className="fs-1 m-1" color="success"></MapOutlinedIcon>Címünk</h2>
        <p className="fs-5 m-2">
          <b>6076 Ágasegyháza, Rákóczi út 89.</b>
        </p>
        <p>Itt található a templom is, a parókia is.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.2335116036434!2d19.441717894552536!3d46.83909291280078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743ccf8c935ee9d%3A0x3b9c521d6b96cff5!2zw4FnYXNlZ3low6F6YSwgUsOha8OzY3ppIMO6dCA4OSwgNjA3Ng!5e0!3m2!1shu!2shu!4v1708116166187!5m2!1shu!2shu"
          width="400"
          height="400"
          style={{ boxShadow: "0 0 10px", marginTop: "20px" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
