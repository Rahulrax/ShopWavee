import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h4>Welcome to ShopWave!</h4>
          <p className="text-justify mt-2">
            At ShopWave, we believe in providing an exceptional online shopping
            experience to our valued customers. With a wide range of
            high-quality products and a commitment to customer satisfaction, we
            strive to be your go-to destination for all your shopping needs.
            <br></br>
          </p>
          <h5>Our Story:</h5>
          <p>
            ShopWave was founded by Rahul Kumarwith a simple yet powerful
            vision: to make online shopping convenient, enjoyable, and reliable.
            We understand the challenges of finding trustworthy online
            retailers, and that's why we created a platform where you can shop
            with confidence.
            <br></br>
            <br></br> Thank you for choosing ShopWave.We look forward to serving
            you and providing you with an exceptional online shopping
            experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
