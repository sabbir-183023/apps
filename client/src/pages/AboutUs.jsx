import React from "react";
import "../css/aboutus.scss";
import Aboutus from '../assets/banners/aboutus.png'

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="picarea">
        <img src={Aboutus} alt="" />
      </div>
      <div className="textarea">
        <div className="leftside">

        <p>
          আমরা অনলাইন টিম। আমরা গত ১৬ মাস ধরে এই টিম নিয়ে কাজ করতেছি, এবং আমাদের
          মেম্বার সংখ্যা প্রতিদিন বাড়ছে। 

          আপনারা যারা অনলাইনে ক্যারিয়ার গড়তে চান, বা অনলাইন থেকে ইনকাম করবেন
          এরকম স্বপ্ন বুকে লালন করছেন, কিন্তু বিভিন্ন কোর্স করেও কোন লাভ হচ্ছে
          না, তারা আমাদের টিমে এড হতে পারেন। 
         
          কারণ কোর্স করার পড়ে আমরা কাজ পেলাম কি পেলাম না সেটা ইনস্টিটিউট খোঁজ
          রাখে না, কিন্তু টিমে কাজ করলে, টিমের ভিতরেই কাজ শিখে, টিম থেকেই কাজ
          নিয়ে করতে পারবেন। এবং পেমেন্টও টিমের ভিতরেই পাবেন। তাই নিশ্চিত একটা
          ক্যারিয়ার এর কথা বিবেচনা করে আমাদের সাথে এড হোন। ধন্যবাদ
        </p>
        </div>
        <div className="rightside">
        <a href="https://www.animatedimages.org/cat-students-1571.htm"><img src="https://www.animatedimages.org/data/media/1571/animated-student-image-0029.gif" border="0" alt="animated-student-image-0029" /></a>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
