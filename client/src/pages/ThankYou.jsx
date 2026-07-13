import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thank-you-page bg-white select-none">
      {/* Title Breadcrumb */}
      <div className="bg-[#2a2a2a] text-center py-12 border-b-[6px] border-[#0d8bc5]" style={{ backgroundImage: "url('/images/about_parallax_bg.jpg')", backgroundAttachment: 'fixed', backgroundPosition: '50% 0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="max-w-[1170px] mx-auto px-4 relative z-10">
          <ul className="flex justify-center items-center gap-2 text-xs text-gray-300 mb-2 uppercase font-semibold">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><span className="border-t-2 border-r-2 border-gray-400 w-1.5 h-1.5 rotate-45 inline-block mx-1"></span></li>
            <li className="text-white">Thank You</li>
          </ul>
          <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider">Thank You</h1>
        </div>
      </div>

      {/* Thank you content */}
      <section className="py-16 bg-white text-[#747474]">
        <div className="max-w-[1170px] mx-auto px-4 text-center">
          <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase mb-8">Thank You</h2>
          <div className="flex flex-col items-center gap-8">
            <div className="max-w-[300px]">
              <img src="/images/thank.png" alt="Thank You confirmation checkmark" className="w-full object-contain" />
            </div>
            <p className="text-sm leading-6 text-themeGrey max-w-[500px]">
              We have received your message. Our representative will contact you shortly to process your inquiry and provide matching options.
            </p>
            <Link to="/" className="bg-[#0d8bc5] hover:bg-themeTeal text-white font-bold text-xs uppercase px-6 py-3 rounded transition-all duration-300">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
