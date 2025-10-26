import React from 'react';

const Services = () => {
  return (
    <section className="services py-20" id="services">
      <h2 className="heading text-5xl font-bold text-center">My <span className="text-red-500">Services</span></h2>
      <div className="services-container mt-12 flex flex-wrap justify-center gap-12">
        <div className="service-box bg-gray-900 p-8 rounded-lg text-center">
          <i className='bx bx-code-alt text-5xl text-red-500'></i>
          <h3 className="text-2xl font-bold mt-4">Web Development</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        </div>
        <div className="service-box bg-gray-900 p-8 rounded-lg text-center">
          <i className='bx bx-paint text-5xl text-red-500'></i>
          <h3 className="text-2xl font-bold mt-4">Graphic Design</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        </div>
        <div className="service-box bg-gray-900 p-8 rounded-lg text-center">
          <i className='bx bx-line-chart text-5xl text-red-500'></i>
          <h3 className="text-2xl font-bold mt-4">SEO Marketing</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
