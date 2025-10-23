import React from 'react';

function Contact() {
    return (
        <section id="contact" className="relative text-black dark:text-white dark:bg-dark">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
  
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97379.88843173109!2d-111.76550253846979!3d40.29526083330343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d7804e4b45119%3A0x642bc3cf90b21ed1!2sOrem%2C%20UT!5e0!3m2!1sen!2sus!4v1656092733882!5m2!1sen!2sus"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                 Orem, Utah
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-400 leading-relaxed" href="mailto:tylerchristensen100@gmail.com">tylerchristensen100@gmail</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    );
}


export default Contact;