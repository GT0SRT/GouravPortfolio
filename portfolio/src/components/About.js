import React from 'react';

const About = () => {
  return (
    <section className="about bg-gray-900 py-20" id="about">
      <h2 className="heading text-5xl font-bold text-center">About <span className="text-red-500">Me</span></h2>
      <div className="about-img mt-12 flex justify-center">
        <img src="GAT.jpg" alt="" className="rounded-full w-64 h-64 border-4 border-red-500" />
      </div>
      <div className="about-content text-center mt-8">
        <h3 className="text-3xl font-bold">SOFTWARE ENGINEER!</h3>
        <p className="mt-4 text-lg max-w-2xl mx-auto">I Am an aspiring Software Development Engineer and I Like to Solve complicated Problems and to code. And Use my this skills in a normal
        day to day life. I Like Mathematics and Physics Very Much.</p>
        <div className="btn-box btns mt-8">
          <a href="#" className="btn bg-red-500 text-black px-6 py-3 rounded-md hover:bg-transparent hover:text-red-500 border-2 border-red-500">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default About;
