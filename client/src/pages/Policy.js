import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2>Privacy Policy</h2>
          <p>
            At ShopWave, we are committed to protecting your privacy. Here's how
            we handle your information:
          </p>
          <p>
            Information We Collect: We collect personal information when you
            create an account or place an order.This includes your name, email
            address, shipping address, and payment details.
          </p>
          <p>
            Use of Information: We use your information to process orders,
            provide customer support, and communicate with you about your
            purchases. We may also personalize your shopping experience and send
            you relevant promotions with your consent.
          </p>
          <p>
            Data Security: We prioritize your data security. We use encryption
            and industry-standard security measures to protect your information
            from unauthorized access.
          </p>
          <p>
            Your Rights: You have the right to access, update, and delete your
            information
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
