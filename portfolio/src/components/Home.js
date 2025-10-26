import React from 'react';

const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1 className="text-5xl font-bold">Hi, I'am <span className="text-red-500">Gourav Makode</span></h1>
        <div className="text-animate">
          <h2 className="text-3xl font-bold text-red-500">
            Software Engineer
          </h2>
        </div>
        <p className="mt-4 text-lg">Curently I'am Persuing My Graduation i.e Bachelor's Degree in Computer science and Enginering and Finding a Golden opportunity
          of an Intership to Learn More New Things at industrial Level and to Boost My Skills. I'am an aspiring Software Development
          Engineer and I Like to Solve complicated Problems and to code.
        </p>
        <div className="btn-box mt-8">
          <a href="https://www.linkedin.com/in/gourav-makode-564685217/" target="_blank" rel="noreferrer" className="btn bg-red-500 text-black px-6 py-3 rounded-md mr-4 hover:bg-transparent hover:text-red-500 border-2 border-red-500">Hire Me</a>
          <a href="https://www.linkedin.com/in/gourav-makode-564685217/" target="_blank" rel="noreferrer" className="btn bg-transparent text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-black border-2 border-red-500">Let's Talk</a>
        </div>
      </div>
      <div className="home-sci mt-8">
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className='bx bxl-instagram text-white text-2xl mx-2 hover:text-red-500'></i></a>
        <a href="https://twitter.com/Gourav_IITB" target="_blank" rel="noreferrer"><i className='bx bxl-twitter text-white text-2xl mx-2 hover:text-red-500'></i></a>
        <a href="https://www.linkedin.com/in/gourav-makode-564685217/" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin text-white text-2xl mx-2 hover:text-red-500'></i></a>
      </div>
    </section>
  );
};

export default Home;
