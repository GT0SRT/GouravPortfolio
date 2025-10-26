import React from 'react';

const Education = () => {
  return (
    <section className="education py-20" id="education">
      <h2 className="heading text-5xl font-bold text-center">My <span className="text-red-500">Journey</span></h2>
      <div className="education-row mt-12 flex flex-wrap justify-center gap-12">
        <div className="education-column">
          <h3 className="title text-3xl font-bold mb-8">EDUCATION</h3>
          <div className="education-box border-l-2 border-red-500 pl-8">
            <div className="education-content mb-8">
              <div className="content">
                <div className="year text-red-500"><i className='bx bxs-calendar'></i>2020-2021</div>
                <h3 className="text-xl font-bold mt-2">SECONDARY SCHOOL EXAMINATION - NIOS, NEW DELHI</h3>
                <p>I was passed my class 10th Examinations in First Division, and secured **1 Marks out of
                  500.(COVID BATCH)
                </p>
              </div>
            </div>
            <div className="education-content mb-8">
              <div className="content">
                <div className="year text-red-500"><i className='bx bxs-calendar'></i>2022-2023</div>
                <h3 className="text-xl font-bold mt-2">HIGHER SECONDARY SCHOOL EXAMINATION - MPBSE, BHOPAL</h3>
                <p>I was passed my class 12th Examinations in First Division, and secured **8 Marks out of 500.
                  And got #1 Rank in Whole School.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year text-red-500"><i className='bx bxs-calendar'></i>2023-2027</div>
                <h3 className="text-xl font-bold mt-2">BACHELORS OF TECHNOLOGY - COMPUTER SCIENCE AND ENGINEERING</h3>
                <p>Curently I'am persuing my Bachelors Degree.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-column">
          <h3 className="title text-3xl font-bold mb-8">EXPERIENCE</h3>
          <div className="education-box border-l-2 border-red-500 pl-8">
            <div className="education-content">
              <div className="content">
                <div className="year text-red-500"><i className='bx bxs-calendar'></i>2024-2024</div>
                <h3 className="text-xl font-bold mt-2">Web Developer - XYZ company</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
