import React, { useContext, useEffect, useState } from "react";
import "../css/collecteddata.scss";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const CollectedData = () => {
  const [wdata, setWdata] = useState([]);
  const [pmdata, setPmdata] = useState([]);

  const { currentUser, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://unicode-api.vercel.app/api/data/`);
        setWdata(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://unicode-api.vercel.app/api/data/pmdata`);
        setPmdata(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  return (
    <>
      {currentUser ? (
        <div className="cd">
          <div className="logout">
            <p onClick={logout}>Admin Logout</p>
          </div>
          <div className="title">
            <h1>Collected Data</h1>
          </div>
          <div className="tables">
            <div className="whatsappleads">
              <h2>WhatsApp Leads</h2>
              <table>
                <thead>
                  <th>ID</th>
                  <th>Whatsapp Numbers</th>
                </thead>
                {wdata.map((data, i) => (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.number}</td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="paymentdetails">
              <h2>Payment Details</h2>
              <table>
                <thead>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Transaction ID</th>
                </thead>
                {pmdata.map((data, i) => (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.mobile}</td>
                    <td>{data.txnid}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="securitywarning">
          <h2>You are not authorized to see this page</h2>
            <div className="combined">
          <p>
            If you are an admin then please

            <Link to={"/adminlogin"}>login</Link>
          </p>
            </div>
        </div>
      )}
    </>
  );
};

export default CollectedData;
