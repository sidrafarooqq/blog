import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-10">
        <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-8">About Me</h1>
        <p className="text-gray-600 text-xl leading-relaxed mb-8">
          Hello and welcome to my blog! My name is Sidra farooq, and I am a web development enthusiast with a passion for sharing knowledge and creating meaningful digital experiences. Here, I dive deep into programming languages, web frameworks, and modern technologies to help you on your tech journey.
        </p>
        <p className="text-gray-600 text-xl leading-relaxed mb-8">
          My primary focus is on making complex topics simple and practical. I am particularly fascinated by the power of artificial intelligence and how mastering time management can transform our lives. Through my blog, I aim to inspire and empower readers to achieve their goals effectively.
        </p>
        <p className="text-gray-600 text-xl leading-relaxed">
          Thank you for being here! I hope this space becomes a source of learning, inspiration, and growth for you. Let&apos;s explore the exciting world of technology together and make the most out of every moment.
        </p>
      </div>
    </div>
  );
};

export default About;
