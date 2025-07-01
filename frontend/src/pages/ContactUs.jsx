import React from "react";

const ContactUs = () => {
  return (
    <section className="py-12 bg-green-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="bg-green-700 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
          {/* Contact Info & Map */}
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <h4 className="font-bold text-lg mb-2">School Contact</h4>
              <p>Email: info@jfkvhs.edu</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 JFKVHS Road, City, State, 12345</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Find Us</h4>
              <div className="w-full h-40 bg-green-200 rounded flex items-center justify-center text-green-800">
                [Map Placeholder]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 