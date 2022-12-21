import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
      return( 
         <div>
               <Header />
                <div className="container col-md-5">
                <h3> สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4"  >
                ภารกิจของศูนย์วิศวกรรรมชุมพร หลักๆได้แก่ มอนิเตอร์ระบบการออกอากาศระบบทีวีดิจิทัล 
                ติดตามและตรวจสอบอุปกรณ์การออกอากาศ PM (Preventive mantannace) เพื่อให้มั่นใจว่า 
                การออกอากาศเป็นไปอย่างต่อเนื่อง ซ่อมบำรุงอุปกรณ์ที่ชำรุดเสียหาย ให้คำปรึกษาชาวบ้านในการติดตั้งกล่องรับสัญญาณ 
                และรวมไปถึงการวัดสัญญาณทีวีดิจิทัลตามพื้นที่ที่ได้รับมอบหมาย
                </p>

                <h5 className="text-success text-right">  จากทีมงานคุณภาพ </h5>
                </div>

               <Footer company = "Thaipbs" email="Smarkwisai@gmail.com" />

         </div>


      );
};
 export default About;