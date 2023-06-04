import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        alert(res.data.message);
        navigate("/login");
      } else {
        alert(res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login -ShopWave">
      <div className="form-container">
        <h1>RESET PASSWORD</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter you Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is your best frined name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter you Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
