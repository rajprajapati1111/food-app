import React, { useState } from "react";
import Header from "../../components/Layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Layouts/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fakeApiCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve("success"), 2000));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const res = await fakeApiCall();
        if (res === "success") {
          alert("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" });
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
      <Header />
      <div
        className="d-flex justify-content-center align-items-center vh-100  "
        style={{
          background: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5') 
            no-repeat center center/cover`,
        }}
      >
        <div className="container bg-light p-5 rounded-4 shadow-lg mt-5 " style={{ maxWidth: "900px" }}>
          <div className="row">
            {/* Left: Contact Info */}
            <div className="col-md-5 mb-4">
              <h3 className="text-warning fw-bold mb-3">📍 Contact Info</h3>
              <p><strong>Address:</strong> 123 Burger Street, Food City</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Email:</strong> support@tastyburger.com</p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-dark fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-dark fs-4"><i className="bi bi-twitter"></i></a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="col-md-7">
              <h3 className="text-warning fw-bold mb-3">✉️ Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
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

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                  ></textarea>
                  <div className="invalid-feedback">{errors.message}</div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold"
                  disabled={loading}
                >
                  {loading ? "⏳ Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
