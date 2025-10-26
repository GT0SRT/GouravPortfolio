import React from 'react';

const Contact = () => {
  return (
    <section className="contact bg-gray-900 py-20" id="contact">
      <h2 className="heading text-5xl font-bold text-center">Contact <span className="text-red-500">Me!</span></h2>
      <form action="#" className="max-w-2xl mx-auto mt-12">
        <div className="input-box flex justify-between gap-8">
          <div className="input-field w-1/2">
            <input type="text" placeholder="Full Name" required className="w-full bg-transparent border-2 border-red-500 rounded-md p-3 text-white" />
          </div>
          <div className="input-field w-1/2">
            <input type="text" placeholder="Email Address" required className="w-full bg-transparent border-2 border-red-500 rounded-md p-3 text-white" />
          </div>
        </div>
        <div className="input-box flex justify-between gap-8 mt-8">
          <div className="input-field w-1/2">
            <input type="Number" placeholder="Mobile Number" required className="w-full bg-transparent border-2 border-red-500 rounded-md p-3 text-white" />
          </div>
          <div className="input-field w-1/2">
            <input type="text" placeholder="Email Subject" required className="w-full bg-transparent border-2 border-red-500 rounded-md p-3 text-white" />
          </div>
        </div>
        <div className="textarea-field mt-8">
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required className="w-full bg-transparent border-2 border-red-500 rounded-md p-3 text-white"></textarea>
        </div>
        <div className="btn-box btns mt-8 text-center">
          <button type="submit" className="btn bg-red-500 text-black px-6 py-3 rounded-md hover:bg-transparent hover:text-red-500 border-2 border-red-500">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
