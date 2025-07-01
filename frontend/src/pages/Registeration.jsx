import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  name: "",
  class: "",
  division: "",
  medium: "",
  dateOfBirth: "",
  age: "",
  gender: "",
  address: {
    houseName: "",
    street: "",
    city: "",
    pincode: "",
    district: "",
  },
  fatherName: "",
  motherName: "",
  bloodGroup: "",
  phoneNumber: "",
  whatsappNumber: "",
  photo: null,
  agreedToTerms: false,
};

const classOptions = ['V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const divisionOptions = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
const mediumOptions = ['English', 'Malayalam'];
const genderOptions = ['male', 'female', 'other'];
const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [regId, setRegId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('address.')) {
      setForm({
        ...form,
        address: {
          ...form.address,
          [name.split('.')[1]]: value,
        },
      });
    } else if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else if (type === 'file') {
      setForm({ ...form, [name]: e.target.files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("class", form.class);
    formData.append("division", form.division);
    formData.append("medium", form.medium);
    formData.append("dateOfBirth", form.dateOfBirth);
    formData.append("gender", form.gender);
    formData.append("fatherName", form.fatherName);
    formData.append("motherName", form.motherName);
    formData.append("bloodGroup", form.bloodGroup);
    formData.append("phoneNumber", form.phoneNumber);
    formData.append("whatsappNumber", form.whatsappNumber);
    formData.append("agreedToTerms", form.agreedToTerms);
    if (form.photo) formData.append("photo", form.photo);
    formData.append("address[houseName]", form.address.houseName);
    formData.append("address[street]", form.address.street);
    formData.append("address[city]", form.address.city);
    formData.append("address[pincode]", form.address.pincode);
    formData.append("address[district]", form.address.district);

    try {
      const res = await axios.post("/api/student/create", formData);
      setStatus("Registration successful!");
      setForm(initialState);
      setRegId(res.data.registrationId);
      setShowPopup(true);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setStatus(err.response.data.message);
      } else {
        setStatus("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <section className="py-12 bg-green-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">Student Registration</h2>
        {showPopup && regId && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Registration Successful!</h3>
              <p className="mb-2 text-green-800">Your Registration ID:</p>
              <div className="text-3xl font-extrabold text-green-700 mb-4">{regId}</div>
              <p className="mb-4 text-green-700">Please save this Registration ID for future use.</p>
              <button
                className="bg-green-700 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-green-800 transition"
                onClick={() => {
                  setShowPopup(false);
                  navigate("/login");
                }}
              >
                Go to Login
              </button>
            </div>
          </div>
        )}
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Full Name" className="border border-green-200 rounded px-4 py-2" required />
          <div className="flex gap-4">
            <select name="class" value={form.class} onChange={handleChange} className="border border-green-200 rounded px-4 py-2 w-1/2" required>
              <option value="">Select Class</option>
              {classOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <select name="division" value={form.division} onChange={handleChange} className="border border-green-200 rounded px-4 py-2 w-1/2" required>
              <option value="">Select Division</option>
              {divisionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <select name="medium" value={form.medium} onChange={handleChange} className="border border-green-200 rounded px-4 py-2" required>
            <option value="">Select Medium</option>
            {mediumOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <div className="flex gap-4">
            <input name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} type="date" className="border border-green-200 rounded px-4 py-2 w-1/2" required />
            <input name="age" value={form.age} onChange={handleChange} type="number" min="1" placeholder="Age" className="border border-green-200 rounded px-4 py-2 w-1/2" required />
          </div>
          <select name="gender" value={form.gender} onChange={handleChange} className="border border-green-200 rounded px-4 py-2" required>
            <option value="">Select Gender</option>
            {genderOptions.map(opt => <option key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>)}
          </select>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="address.houseName" value={form.address.houseName} onChange={handleChange} type="text" placeholder="House Name" className="border border-green-200 rounded px-4 py-2" required />
            <input name="address.street" value={form.address.street} onChange={handleChange} type="text" placeholder="Street" className="border border-green-200 rounded px-4 py-2" required />
            <input name="address.city" value={form.address.city} onChange={handleChange} type="text" placeholder="City" className="border border-green-200 rounded px-4 py-2" required />
            <input name="address.pincode" value={form.address.pincode} onChange={handleChange} type="text" placeholder="Pincode" className="border border-green-200 rounded px-4 py-2" required />
            <input name="address.district" value={form.address.district} onChange={handleChange} type="text" placeholder="District" className="border border-green-200 rounded px-4 py-2" required />
          </div>
          <div className="flex gap-4">
            <input name="fatherName" value={form.fatherName} onChange={handleChange} type="text" placeholder="Father's Name" className="border border-green-200 rounded px-4 py-2 w-1/2" required />
            <input name="motherName" value={form.motherName} onChange={handleChange} type="text" placeholder="Mother's Name" className="border border-green-200 rounded px-4 py-2 w-1/2" required />
          </div>
          <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className="border border-green-200 rounded px-4 py-2" required>
            <option value="">Select Blood Group</option>
            {bloodGroups.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <div className="flex gap-4">
            <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} type="text" placeholder="Phone Number" className="border border-green-200 rounded px-4 py-2 w-1/2" required />
            <input name="whatsappNumber" value={form.whatsappNumber} onChange={handleChange} type="text" placeholder="WhatsApp Number" className="border border-green-200 rounded px-4 py-2 w-1/2" required />
          </div>
          <div>
            <label className="block mb-2 font-medium text-green-900">Photo</label>
            <input name="photo" onChange={handleChange} type="file" accept="image/*" className="border border-green-200 rounded px-4 py-2 w-full" />
          </div>
          <div className="flex items-center gap-2">
            <input name="agreedToTerms" type="checkbox" checked={form.agreedToTerms} onChange={handleChange} required />
            <label htmlFor="agreedToTerms" className="text-green-800">I agree to the terms and conditions</label>
          </div>
          {status && <div className={`text-center font-semibold ${status.includes('success') ? 'text-green-700' : 'text-red-600'}`}>{status}</div>}
          <button type="submit" className="bg-green-700 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-green-800 transition mt-4">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Registration; 