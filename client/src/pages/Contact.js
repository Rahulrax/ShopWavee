import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            We're here to help! If you have any questions, feedback, or
            concerns, please don't hesitate to reach out to us. You can contact
            us using the information provided below:
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ShopWave.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
          <p>
            Business Hours: <br></br> Monday to Friday: 9:00 AM to 6:00 PM (IST){" "}
            <br></br>Saturday and Sunday: Closed
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
