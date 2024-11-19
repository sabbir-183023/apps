import  { useContext, useEffect, useState } from "react";
import "../css/Homepage.scss";
import { FaBook } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";
import wtsplogo from "../assets/banners/whsplogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import one from "../assets/reviewpeople/1.jpeg";
import two from "../assets/reviewpeople/2.jpeg";
import three from "../assets/reviewpeople/3.jpeg";
import four from "../assets/reviewpeople/4.jpeg";
import five from "../assets/reviewpeople/5.jpeg";
import six from "../assets/reviewpeople/6.jpeg";
import seven from "../assets/reviewpeople/7.jpeg";
import eight from "../assets/reviewpeople/8.jpeg";
import introvdo from "../assets/videos/VID_20240925_161834_111.mp4";

const Homepage = () => {
  const [showElement, setShowElement] = useState(true);
  const elementStyle = {
    display: showElement ? "block" : "none",
  };


  const [number, setNumber] = useState("");

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/data/", { number });
    } catch (err) {}
    setShowElement(false);
  };

  //Calling Member Number
  const [member, setMember] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/api/data/member/1`);
        setMember(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [1]);



  return (
    <div>
      <div className="popup" style={elementStyle}>
        <div className="textbox">
          <p>Please enter your whatsapp number</p>
          <p>দয়া করে আপনার হোয়াটসঅ্যাপ নম্বরটি প্রবেশ করান </p>
        </div>
        <div className="crossbox">
          <p onClick={() => setShowElement(false)}>
            <FaWindowClose />
          </p>
        </div>
        <div className="whatsapplogo">
          <img src={wtsplogo} alt="" />
        </div>
        <div className="popupmini">
          <div>
            <form action="">
              <input
                name="number"
                type="text"
                placeholder="01808XXXXXX"
                onChange={(e) => setNumber(e.target.value)}
              />
              <br />
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <main>
        <section className="hero">
          <h2>সিপিএ মার্কেটিং শিখুন এবং টিমের সাথে কাজ করুন</h2>
          <div className="mainpage-paragraph">
            <p>
              আসসালামু আলাইকুম একটা কাজে যদি আপনার সর্বোচ্চ টা দিয়ে দেন,অন্য
              কাজের ব্যবস্থা যদি না থাকে, তখন এই একটা কাজ বন্ধ হলে, আপনার আবার
              কাজ খুজতে হবে। তাই একসাথে মাল্টি কাজ করার চিন্তা করুন, যাতে একটা
              বন্ধ হলে একটা চালু থাকে।
            </p>
            <p>আমার টিমে মাল্টি কাজ হয়, টোটাল সাতটা কাজ আছে। </p>
            <ul>
              <li>Amazon Affiliate Marketing</li>
              <li>Amazon Bounty Programme</li>
              <li>Amazon Baby Registry</li>
              <li>ChatGPT Blogging </li>
              <li>Facebook Page Income</li>
              <li>WhatsApp Bot Marketing</li>
              <li>CPA Fake Signup</li>
            </ul>
            <p>
              আমরা সবগুলো কাজ একদিনে বা এক সপ্তাহে শিখতে পারবো না। তাই প্রথমে
              আমরা ফেইক সাইনআপ দিয়ে শুরু করবো, কারণ এটা শিখতে মাত্র দুই ঘন্টা
              সময় লাগে আর ইনকাম টাও তারাতারি আসে। আর এটা করতে
            </p>
            <ul>
              <li>আ-ইপি</li>
              <li>User Agent (Device Changer)</li>
              <li>USA Gmail</li>
            </ul>
            <p>
              এই তিনটা জিনিস লাগবে। এগুলো আমরা আপনাকে এগুলো প্রোভাইড করবো। তবে
              এগুলো পেইড টুলস, তাই দয়া করে ফ্রি আশা করবেন না। আর আমাদের টিমে
              একবার এড হলেই আপনি সবগুলো কাজ শিখতে পারবেন। আমরা প্রথমে সিপিএ ফেইক
              সাইনআপ করবো। আর এটার পেমেন্ট আমরা শুক্রবার করে থাকি। ডলার রেট ৮০
              টাকা। ম্যানেজার এর ৪০% দিয়ে কাজ করি। তাই পেমেন্ট গ্যারান্টি।
            </p>
            <p>
              আর অন্য কাজগুলোর ইনকাম সোজা আপনাদের নিজেদের প্যানেলে এড হবে।
              নিজেদের ডলার নিজেরা তুলতে পারবেন।
            </p>
          </div>
          <button>
            <Link to={"/payment"} className="btn">
              আজই যোগদান করুন
            </Link>
          </button>
        </section>

        <section className="homepagevideo">
          <h1>Know more about us</h1>
          <h2>
            " যদিও ভিডিও টা বড়, তবে আপনার কাজ দরকার হলে, ক্যারিয়ার দরকার হলে,
            কষ্ট করে ভিডিও টা পুরো দেখে ফেলুন। আশা করি আলোর দেখা পাবেন।"
          </h2>
          <video src={introvdo} controls></video>
        </section>

        <section className="joinbutton">
          <Link to="/payment">
            <button>যদি আপনি আগ্রহী হোন তাহলে এখানে ক্লিক করুন</button>
          </Link>
        </section>

        <section className="features">
          <div className="featureTitle">
            <h2>আমাদের সাথে কেন যোগ দিবেন?</h2>
          </div>
          <div className="boxes">
            <div className="feature-card">
              <span>
                <FaBook />
              </span>
              <h3>মাল্টি ওয়ার্ক</h3>
              <p>
                আমাদের এখানে একবার এড হলে, আমাদের এখানে টোটাল সাতটা কাজ ফ্রী
                শিখতে পারবেন, এবং সবগুলো কাজ আমাদের গ্রুপের মধ্যে থেকে করতে
                পারবেন। আর একবার যদি সবগুলো কাজ শিখতে পারেন,তাহলে আর কখনো কাজের
                জন্য অন্য কোথাও যেতে হবে না।
              </p>
            </div>
            <div className="feature-card">
              <span>
                <MdEmojiPeople />
              </span>
              <h3>লাইভ ক্লাস, লাইভ সাপোর্ট</h3>
              <p>
                আমাদের এখানে প্রতিটা কাজ লাইভে শিখতে পারবেন, এবং লাইভ ক্লাসের
                রেকর্ড পাবেন। আর যে কোন সমস্যা হলে গ্রুপে লিখলেই এডমিন বা
                গ্রুপের অন্য সিনিয়র মেম্বারগণ সাথে সাথে সমাধান করে দিবে।
              </p>
            </div>
            <div className="feature-card">
              <span>
                <FaRegHandPeace />
              </span>
              <h3>সাপ্তাহিক পেমেন্ট</h3>
              <p>
                আমাদের সবগুলো কাজের পেমেন্ট সাপ্তাহিক শুক্রবার বিকেলে গুগল মিটে
                ক্লাসে এসে পেমেন্ট করা হয়। সেই পেমেন্ট বিকাশ নগদ,রকেট, যে কোন
                ভাবে নিতে পারবেন।
              </p>
            </div>
          </div>
        </section>
        <h2 className="h2o">আমাদের ছাত্রছাত্রীদের বক্তব্য</h2>
        <section className="testimonials">
          <div className="testimonial">
            <img src={one} alt="one" />
            <p>
              "আলহামদুলিল্লাহ, অনেক কোর্স করে ফেল করার পর শেষ পর্যন্ত একটা
              প্লাটফর্ম পেলাম, যেখান থেকে ইনকাম করতে পারছি এবং ভালো আছি
              ইনশাআল্লাহ। Thanks Minu Vai"
            </p>
          </div>
          <div className="testimonial">
            <img src={two} alt="" />
            <p>
              "শেষ পর্যন্ত বুঝলাম, আমাদের মত অল্প জানা ফ্রিল্যান্সারদের জন্য
              টিমে কাজ করা উত্তম।"
            </p>
          </div>
          <div className="testimonial">
            <img src={three} alt="" />
            <p>"Minu vai Thanks For adding me. Allah bless you."</p>
          </div>
          <div className="testimonial">
            <img src={four} alt="" />
            <p>
              "আলহামদুলিল্লাহ, বড় ভাইয়ের সাথে কাজ করে আমার একটা বিশ্বাস হয়েছে
              যে, ফ্রিল্যান্সিং বা অনলাইনে আসলেই টাকা ইনকাম যায়।"
            </p>
          </div>
          <div className="testimonial">
            <img src={five} alt="" />
            <p>
              "Dhora kheye kheye online a kaj bad dichilam, kintu Minu vai ke
              peye abar suru korlam."
            </p>
          </div>
          <div className="testimonial">
            <img src={six} alt="" />
            <p>
              "আমার মনে হয় এই Cpa & Affiliate Team বাংলাদেশের সর্বশ্রেষ্ঠ
              প্লাটফর্ম হবে একদিন।"
            </p>
          </div>
          <div className="testimonial">
            <img src={seven} alt="" />
            <p>
              "কোর্স করে করে সর্বশান্ত হবার পরে এই টিমে এড হয়ে কিছু টাকার মুখ
              দেখলাম।"
            </p>
          </div>
          <div className="testimonial">
            <img src={eight} alt="" />
            <p>"ভাই তো রিভিউ পছন্দ করে না, তাহলে কি রিভিউ দিবো?"</p>
          </div>
        </section>
        <section className="NumberOfStudentsENrolled">
          <div className="numbers">
            <div className="numberbox">
              <span>
                {member.map((data, i) => (
                  <>{data.member}</>
                ))}
              </span>
            </div>
          </div>
          <div className="titleofnumbercount">
            <h1>Numbers of Students that has enrolled with us already!</h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
