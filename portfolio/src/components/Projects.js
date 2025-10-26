import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects py-20">
      <div className="main-container">
        <h2 className="heading text-5xl font-bold text-center">
          <span className="heading-sec__main">PROJECTS</span>
        </h2>
        <div className="projects__content mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img src="bti.png" alt="Background Transition" className="projects__row-img w-full" />
            </div>
            <div className="projects__row-content mt-4">
              <h3 className="projects__row-content-title text-3xl font-bold">Background Transition</h3>
              <p className="projects__row-content-desc mt-2 text-lg">Here I used HTML, CSS and Javascript ,
                you can get here color for your gradient background effect.</p>
              <div className="btn-box btns mt-4">
                <a href="https://gt0srt.github.io/Backgroundtransition/" className="btn bg-red-500 text-black px-6 py-3 rounded-md hover:bg-transparent hover:text-red-500 border-2 border-red-500" target="_blank" rel="noreferrer">Live</a>
              </div>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img src="placeholder.jpg" alt="Project 2" className="projects__row-img w-full" />
            </div>
            <div className="projects__row-content mt-4">
              <h3 className="projects__row-content-title text-3xl font-bold">Project 2</h3>
              <p className="projects__row-content-desc mt-2 text-lg">A brief description of your project.</p>
              <div className="btn-box btns mt-4">
                <a href="#" className="btn bg-red-500 text-black px-6 py-3 rounded-md hover:bg-transparent hover:text-red-500 border-2 border-red-500" target="_blank" rel="noreferrer">Live</a>
              </div>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img src="placeholder.jpg" alt="Project 3" className="projects__row-img w-full" />
            </div>
            <div className="projects__row-content mt-4">
              <h3 className="projects__row-content-title text-3xl font-bold">Project 3</h3>
              <p className="projects__row-content-desc mt-2 text-lg">A brief description of your project.</p>
              <div className="btn-box btns mt-4">
                <a href="#" className="btn bg-red-500 text-black px-6 py-3 rounded-md hover:bg-transparent hover:text-red-500 border-2 border-red-500" target="_blank" rel="noreferrer">Live</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
