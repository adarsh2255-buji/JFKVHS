import React from "react";

const achievements = [
  {
    title: "National Science Olympiad Winner",
    year: 2023,
    description: "Our students secured first place in the National Science Olympiad, showcasing their innovation and scientific acumen."
  },
  {
    title: "State Basketball Champions",
    year: 2022,
    description: "The JFKVHS basketball team won the state championship, demonstrating teamwork and sportsmanship."
  },
  {
    title: "Best School in Community Service",
    year: 2023,
    description: "Recognized for outstanding contributions to local community service projects and social initiatives."
  },
  {
    title: "Top 10 Academic Excellence Award",
    year: 2022,
    description: "Ranked among the top 10 schools in the region for academic performance and student success."
  }
];

const Achievement = () => {
  return (
    <section className="py-12 bg-green-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">Our Achievements</h2>
        <p className="text-lg text-green-800 mb-8 text-center">
          JFKVHS is proud of its tradition of excellence in academics, sports, and community service. Here are some of our recent achievements:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-green-900 mb-2">{ach.title}</h3>
              <div className="text-green-700 font-semibold mb-2">{ach.year}</div>
              <p className="text-green-800">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement; 