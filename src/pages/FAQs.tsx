import React, { useState } from 'react';
import faqimage from '../assets/5175820.jpg'
import Header from '../components/header/Header';
import Footer from '../components/features/Footer';


const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
        <Header/>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={faqimage}
                alt="FAQ section illustration"
                className="w-full rounded-xl object-cover"
              />
            </div>
            {/* FAQ Section */}
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h6 className="text-lg text-center font-medium text-green-600 mb-2 lg:text-left">
                    FAQs
                  </h6>
                  <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                    Looking for answers?
                  </h2>
                </div>
                {/* Accordion */}
                <div className="space-y-6">
                  {/* Accordion Item 1 */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => toggleAccordion(1)}
                      className="w-full flex justify-between items-center text-xl font-medium text-gray-600 hover:text-indigo-600 focus:outline-none"
                    >
                      <span>How do I book a car?</span>
                      <svg
                        className={`w-6 h-6 transform transition-transform ${
                          activeIndex === 1 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeIndex === 1 && (
                      <div className="mt-4 text-gray-500 text-base">
                        <p>
                        Booking a car is simple! Browse through our car options, 
                        select the one that suits your needs, pick your rental dates,
                        and complete the booking by making payment..
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => toggleAccordion(2)}
                      className="w-full flex justify-between items-center text-xl font-medium text-gray-600 hover:text-indigo-600 focus:outline-none"
                    >
                      <span>What documents are required to rent a car?</span>
                      <svg
                        className={`w-6 h-6 transform transition-transform ${
                          activeIndex === 2 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeIndex === 2 && (
                      <div className="mt-4 text-gray-500 text-base">
                        <p>
                        You’ll need a valid driver’s license, an identity proof (such as an Aadhaar card or passport),
                         and a credit or debit card for payment.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Add more accordion items as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default FAQs;
