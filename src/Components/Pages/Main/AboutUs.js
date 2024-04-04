import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

import { BsFillDiamondFill } from "react-icons/bs";
import img from "../../../imgs/new logo.png";
import rektor_img from "../../../imgs/rektor img.jpg";

function Main() {


  const [load, setLoad] = useState(false);
  
  useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 2000);
    }, [])

  return (
    <>

        <div className={!load ? "loader" : "loader active"}>
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>


      <div className="about_page container">
        <div className="pages_link">
          <Link to="/">Main page</Link>
          <BsFillDiamondFill />
          About Us
        </div>

        <div className="about_text">
          <h1>Institut haqida</h1> <br />
            <p>
              Impuls tibbiyot instituti oʻz oldiga mintaqadagi yetakchi oliy
              taʼlim muassasasi boʻlish maqsadini amalga oshirish va Oʻzbekiston
              taraqqiyotiga hissa qoʻshishni maqsad qilgan.
            </p>

            <p>
              Institutning vazifasi: Mamlakatning tibbiyot hodimlariga boʻlgan
              talabini hisobga olib, yetarli miqdordagi talabalarni oʻqitish,
              professional kadrlar tayyorlash boʻyicha yechimlar taklif qilish,
              yangi taʼlim texnologiyalarini ishlab chiqarish va taʼlim-tarbiya
              tamoyillarini ishlab chiqish. Impuls tibbiyot instituti turli
              mamlakatlardan kelgan talabalarga xalqaro miqyosda tan olingan
              standartlarda ta’lim beradi.
            </p>

            <p>
              O‘quv jarayoni yetakchi xalqaro ilmiy-tadqiqot muassasalari
              jumladan tibbiyot yo‘nalishidagi va xorijda mehnat qilayotgan
              yurtdoshlarimiz bilan hamkorlikda olib borilmoqda. O‘qish ingliz
              va oʻzbek tilida bo‘lib, 6 yil davom etadi. Bitiruvchilarga oliy
              ma’lumot toʻgʻrisidagi diplom beriladi. Impuls instituti
              mas’uliyatni yaxshi biladi, oʻz kuchi va imkoniyatini talabalar va
              professor-o‘qituvchilar birgalikda samarali tadqiqot olib
              borishlari mumkin bo‘lgan intellektual muhitni yaratishga
              bag‘ishlaydi. Institut oʻz talabalariga eng zamonaviy va eng
              sifatli taʻlimni taklif qilishni maqsad qilgan. Institutni ushbu
              uzoq ta’lim yo‘liga qadam qo‘ygan har bir talaba o‘z bilimlari
              bilan to‘liq ta’minlangan shaxs sifatida bitiradi
            </p>

            <p>
              Impuls instituti bu mas’uliyatni yaxshi biladi va o‘zini talabalar
              va professor-o‘qituvchilar birgalikda samarali va samarali
              tadqiqot olib borishlari mumkin bo‘lgan intellektual muhitni
              yaratishga bag‘ishlaydi. Institut o'z talabalariga eng zamonaviy
              va eng sifatli ta'limni taklif qilishni maqsad qilgan.
              Institutimizda ushbu uzoq ta’lim yo‘liga qadam qo‘ygan har bir
              talaba o‘z bilimlari bilan to‘liq ta’minlangan va to‘liq
              ta’minlangan shaxs sifatida bitiradi.
            </p>
          </div>

        <div className="about_page_inner_div">

   
          <h2 className="text-center">Impuls tibbiyot instituti rektori</h2>

          <div className="rektor_info_div">
            <div className="rektor_img">
              <img src={rektor_img} alt="" />
            </div>

            <div className="rektor">
              <h1>Xolmirzayev Orifjon Numonjon o'g'li</h1>
              <h3>Impuls Tibbiyot Instituti rektori</h3>
              <p>Qabul kunlari: Dushanbadan - Shanba, 14:00 - 17:00 gacha</p>
              <p>E-mail: kholmirzayev@impulsmi.uz</p>
            </div>
          </div>




          <div className="institut_tarixi">
              <h1>Institut tarixi</h1>

              <div className="blogs">

                <div className="block">
                  <div className="year">
                    <span>2018</span>
                  </div>
                  <div className="year_info">
                    <p>Namangan viloyati norin tumani norinkapa MFY da IMPULS xususiy shifoxonasi ochildi u bizning tibbiyotni o'zgartirish uchun qo'ygan birinchi qadamimiz edi</p>
                  </div>
              </div>
                <div className="block">
                  <div className="year">
                    <span>2019</span>
                  </div>
                  <div className="year_info">
                    <p>tibbiyotda va formakologiyada bo'lgan muammolarni bartaraf etish uchun tibbiyot institutini ochish g'oyasi kelgan bu esa muammoni aynan o'zagini bartaraf etish uchun eng yahshi yo'l deb hisobladik</p>
                  </div>
              </div>
                <div className="block">
                  <div className="year">
                    <span>2019 - 2022</span>
                  </div>
                  <div className="year_info">
                    <p>namangan viloyati norin tumani norinkapa MFY da IMPULS xususiy shifoxonasi ochildi u bizning tibbiyotni o'zgartirish uchun qo'ygan birinchi qadamimiz edi</p>
                  </div>
              </div>
                <div className="block">
                  <div className="year">
                    <span>2022</span>
                  </div>
                  <div className="year_info">
                    <p>namangan viloyati norin tumani norinkapa MFY da IMPULS xususiy shifoxonasi ochildi u bizning tibbiyotni o'zgartirish uchun qo'ygan birinchi qadamimiz edi</p>
                  </div>
              </div>
  
              </div>




          </div>
          <div className="brend_logo_img">
            <img src={img} alt="" />
          </div>


        </div>
      </div>
    </>
  );
}

export default Main;
