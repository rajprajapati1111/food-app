import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
<<<<<<< HEAD

=======
import sign from "../../styles/sign.css"
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083
import { Navigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fakeApiCall = () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve("success"), 2000)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const res = await fakeApiCall(); // fake API call
        if (res === "success") {
          alert("✅ Sign Up Successful! Redirecting to login...");
          Navigate("/login"); 
        }
      } catch (err) {
        alert("❌ Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (

    <>
<Header/>
    <div
        className="d-flex flex-column align-items-center justify-content-center text-center text-white signup-background">
      <div
        className="card p-4 shadow-lg mb-4"
        style={{ width: "420px", borderRadius: "20px", backgroundColor: "#fff",marginTop:"150px" }}
      >
        <h2 className="text-center mb-3 text-warning fw-bold">🍔 Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
              <div className="invalid-feedback d-block">
                {errors.password}
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label fw-bold">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-warning w-100 fw-bold"
            disabled={loading}
          >
            {loading ? "⏳ Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-warning fw-bold">
            Login
          </a>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
