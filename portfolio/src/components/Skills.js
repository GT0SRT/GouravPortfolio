import React from 'react';

const Skills = () => {
  return (
    <section className="skills bg-gray-900 py-20" id="skills">
      <h3 className="heading text-5xl font-bold text-center">My <span className="text-red-500">Skills</span></h3>
      <div className="skills-row mt-12 flex flex-wrap justify-center gap-12">
        <div className="skills-column">
          <h3 className="title text-3xl font-bold mb-8">Coding Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress mb-4">
                <h3 className="flex justify-between"><span>HTML</span> <span>90%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[90%]"></span></div>
              </div>
              <div className="progress mb-4">
                <h3 className="flex justify-between"><span>CSS</span> <span>80%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[80%]"></span></div>
              </div>
              <div className="progress mb-4">
                <h3 className="flex justify-between"><span>JavaScript</span> <span>75%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[75%]"></span></div>
              </div>
              <div className="progress mb-4">
                <h3 className="flex justify-between"><span>React</span> <span>85%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[85%]"></span></div>
              </div>
              <div className="progress">
                <h3 className="flex justify-between"><span>Python</span> <span>70%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[70%]"></span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <h3 className="title text-3xl font-bold mb-8">Profesional Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress mb-4">
                <h3 className="flex justify-between"><span>Web Design</span> <span>95%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[95%]"></span></div>
              </div>
              <div className="progress mb-4">
                <h3 className="flex justify-between"><span>Web Development</span> <span>85%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[85%]"></span></div>
              </div>
              <div className="progress mb-4">
                <h3 className="flex justify-between"><span>Graphic Design</span> <span>76%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[76%]"></span></div>
              </div>
              <div className="progress">
                <h3 className="flex justify-between"><span>SEO Marketing</span> <span>67%</span></h3>
                <div className="bar bg-gray-700 rounded-full h-4 mt-2"><span className="block bg-red-500 rounded-full h-4 w-[67%]"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
