import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [registrationId, setRegistrationId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      const res = await fetch("/api/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registrationId, dateOfBirth }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Login successful!");
        // Optionally save student info to localStorage or context
        setTimeout(() => navigate("/"), 1500);
      } else {
        setStatus(data.message || "Login failed.");
      }
    } catch (err) {
      setStatus("Login failed. Please try again later.");
    }
  };

  return (
    <section className="py-12 bg-green-50 min-h-screen">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">Student Login</h2>
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="number"
            min="3000"
            name="registrationId"
            value={registrationId}
            onChange={e => setRegistrationId(e.target.value)}
            placeholder="Registration ID"
            className="border border-green-200 rounded px-4 py-2"
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}
            className="border border-green-200 rounded px-4 py-2"
            required
          />
          {status && <div className={`text-center font-semibold ${status.includes('success') ? 'text-green-700' : 'text-red-600'}`}>{status}</div>}
          <button type="submit" className="bg-green-700 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-green-800 transition mt-2">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login; 