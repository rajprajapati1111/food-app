import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validation
  const validate = () => {
    let newErrors = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fake API call
  const fakeApiCall = () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve("success"), 2000)
    );
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const res = await fakeApiCall();
        if (res === "success") {
          alert("✅ Login Successful! Redirecting to homepage...");
          Navigate("/") // Home page redirect
        }
      } catch (err) {
        alert("❌ Invalid credentials, please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column align-items-center justify-content-center text-center text-white signup-background">
        <div
          className="card p-4 shadow-lg mb-4"
          style={{
            width: "420px",
            borderRadius: "20px",
            backgroundColor: "#fff",
            marginTop: "150px",
          }}
        >
          <h2 className="text-center mb-3 text-warning fw-bold">🔑 Login</h2>
          <form onSubmit={handleSubmit}>
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
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-warning w-100 fw-bold"
              disabled={loading}
            >
              {loading ? "⏳ Logging In..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <a href="/signup" className="text-warning fw-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
