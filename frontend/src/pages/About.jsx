import React from "react";

const About = () => {
  return (
    <section className="py-12 bg-green-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">About JFKVHS</h2>
        <p className="text-lg text-green-800 mb-8 text-center">
          JFKVHS is dedicated to providing a nurturing and innovative environment where students are empowered to achieve academic excellence, develop leadership skills, and become responsible global citizens.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-2">Our Mission</h3>
            <p className="text-green-800">
              To inspire and empower every student to reach their full potential through a holistic approach to education, fostering creativity, critical thinking, and a passion for lifelong learning.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-2">Our Vision</h3>
            <p className="text-green-800">
              To be a leading institution recognized for excellence in education, innovation, and community engagement, preparing students to thrive in a rapidly changing world.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Our Core Values</h3>
          <ul className="list-disc list-inside text-green-800 space-y-2">
            <li>Integrity and Respect</li>
            <li>Excellence in Academics</li>
            <li>Innovation and Creativity</li>
            <li>Community and Collaboration</li>
            <li>Leadership and Responsibility</li>
            <li>Diversity and Inclusion</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About; 