import React, { useContext, useEffect, useState } from "react";
import "../css/payment.scss";
import bkash from "../assets/banners/bkash.webp";
import nagad from "../assets/banners/nagad.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../context/authContext";

const Payment = () => {
  const [showElement, setShowElement] = useState(false);
  const elementStyle = {
    display: showElement ? "flex" : "none",
  };
  const [showElement2, setShowElement2] = useState(false);
  const elementStyle2 = {
    display: showElement2 ? "flex" : "none",
  };
  const [showElement3, setShowElement3] = useState(false);
  const elementStyle3 = {
    display: showElement3 ? "flex" : "none",
  };

  const { currentUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [txnid, setTxnid] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://unicode-api.vercel.app/api/data/paymentdata", {
        name,
        mobile,
        txnid,
      });
      navigate(
        "/g7ajcna6&ascb%cbhaj@j777asa455a&sancas%ah47sa54%$shb78sxc0as5"
      );
    } catch (err) {}
  };

  //Calling Bkash Number
  const [bkashn, setBkash] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://unicode-api.vercel.app/api/data/bkash/1`);
        setBkash(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [1]);


  //Calling Nagad Number
  const [nagadn, setNagad] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://unicode-api.vercel.app/api/data/nagad/1`);
        setNagad(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [1]);


  //Calling Amount Number
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://unicode-api.vercel.app/api/data/amount/1`);
        setAmount(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [1]);


  return (
    <div className="payment">
      <div className="title">
        <h1 className="fstline">
          যুক্ত হওয়ার জন্য নিম্নোক্ত টুল ফি নিম্নোক্ত নম্বরে পাঠিয়ে ফরমটি পূরন
          করুন
        </h1>

        <h1 className="Money">
          Tk.
          {amount.map((data, i) => (
            <>{data.amount}</>
          ))}
        </h1>
        <div className="imagebox">
          <div className="combinedbox1">
            <img className="bkash" src={bkash} alt="" />
            <h2 className="h21">
              {bkashn.map((data, i) => (
                <>{data.number}</>
              ))}
              (Personal)
            </h2>
          </div>
          <div className="combinedbox2">
            <img className="nagad" src={nagad} alt="" />
            <h2 className="h22">
              {nagadn.map((data, i) => (
                <>{data.number}</>
              ))}
              (Personal)
            </h2>
          </div>
        </div>
        <div className="imagebox"></div>
      </div>
      <div className="form">
        <form action="">
          <label htmlFor="">নাম :</label>
          <input
            className="input1"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="">মোবাইল নং :</label>
          <input
            className="input2"
            required
            type="text"
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
          <label htmlFor="">বিকাশ/নগদ ট্রান্সেকশন নং :</label>
          <input
            className="input3"
            required
            type="text"
            onChange={(e) => setTxnid(e.target.value)}
          />
          <br />
          <button onClick={handleSubmit}>সাবমিট করুন</button>
        </form>
      </div>
      <p>
        টাকা পাঠানো ও ফরম সাবমিট হয়ে গেলে অপেক্ষা করুন খুব শিঘ্রই আমাদের একজন
        প্রতিনিধি আপনাকে কল করবে।
      </p>
    </div>
  );
};

export default Payment;
