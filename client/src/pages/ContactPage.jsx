import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    securityCode: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [captchaUrl, setCaptchaUrl] = useState('/api/captcha');

  const refreshCaptcha = () => {
    setCaptchaUrl(`/api/captcha?t=${Date.now()}`);
    setFormData((prev) => ({ ...prev, securityCode: '' }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim() || formData.name === 'Name') {
      tempErrors.name = 'Please enter the Name..';
    }
    if (!formData.email.trim() || formData.email === 'Email Address') {
      tempErrors.email = 'Please enter the Email...';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Not a valid e-mail address';
      }
    }
    if (!formData.phone.trim() || formData.phone === 'Phone No.') {
      tempErrors.phone = 'Please enter the phone No.';
    } else if (isNaN(formData.phone)) {
      tempErrors.phone = 'Enter the valid Mobile Number(Like : 9566137117)';
    } else if (formData.phone.length < 10 || formData.phone.length > 11) {
      tempErrors.phone = 'Your Mobile Number must be of 10 Integers';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Please enter the Message.';
    }
    if (!formData.securityCode.trim() || formData.securityCode === 'Security Code') {
      tempErrors.securityCode = 'Please enter the Security Code.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      })
        .then(async (res) => {
          if (!res.ok) {
            const data = await res.json();
            throw new Error(data.error || 'Failed to send message.');
          }
          // Redirect to thank-you.html -> /thank-you in React Router
          navigate('/thank-you');
        })
        .catch((err) => {
          console.error(err);
          alert(err.message || 'Failed to send message.');
          refreshCaptcha();
        });
    } else {
      // Alert first error to replicate legacy onSubmit alert logic
      if (!formData.name.trim() || formData.name === 'Name') {
        alert('Please enter the Name..');
        return;
      }
      if (!formData.email.trim() || formData.email === 'Email Address') {
        alert('Please enter the Email...');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert('Not a valid e-mail address');
        return;
      }
      if (!formData.phone.trim() || formData.phone === 'Phone No.') {
        alert('Please enter the phone No.');
        return;
      }
      if (isNaN(formData.phone)) {
        alert('Enter the valid Mobile Number(Like : 9566137117)');
        return;
      }
      if (formData.phone.length < 10 || formData.phone.length > 11) {
        alert('Your Mobile Number must be of 10 Integers');
        return;
      }
      if (!formData.message.trim()) {
        alert('Please enter the Message.');
        return;
      }
      if (!formData.securityCode.trim() || formData.securityCode === 'Security Code') {
        alert('Please enter the Security Code.');
        return;
      }
    }
  };

  return (
    <div className="contact-page-legacy select-none">
      <section className="main secondary_page" data-animate-up="header-static" data-animate-down="header-small">
        
        {/* Start title container */}
        <div className="title_container t_align_center type_3">
          <div className="container">
            <ul className="path_list clearfix">
              <li><Link to="/">Home</Link></li>
              <li><i></i>Contact</li>
            </ul>
            <h1 style={{ color: '#fff' }}>Contact</h1>
          </div>
        </div>
        {/* End title container */}

        <div className="flip_container">
          {/* Start contact hexagons */}
          <section className="contact_hexagons">
            <div className="container">
              
              {/* Start contact info hexagon left */}
              <div className="hex_elem_rounded_type_2 contact_info f_left">
                <a 
                  href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block cursor-pointer"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="hex_elem_rounded_type_2 c_icon_m transition-transform duration-300 group-hover:scale-105">
                    <span className="h_el_01"></span>
                    <span className="h_el_02"></span>
                    <span className="ic"></span>
                  </div>
                  <h5 className="transition-colors duration-200">Main Branch</h5>
                  <p className="transition-colors duration-200 leading-relaxed">
                    107/111, Matka Building, <br />
                    Office No. 4, Ground Floor,<br />
                    Dr. M. G. Mahimtura Marg,<br />
                    3rd Kumbharwada, <br />
                    Mumbai – 400 004,<br />
                    Maharashtra, India.
                  </p>
                </a>
                <span className="h_el_01"></span>
                <span className="h_el_02"></span>
              </div>
              {/* End contact info hexagon left */}

              {/* Start contact info hexagon right */}
              <div className="hex_elem_rounded_type_2 contact_info f_right">
                <div>
                  <div className="hex_elem_rounded_type_2 c_icon_h">
                    <span className="h_el_01"></span>
                    <span className="h_el_02"></span>
                    <span className="ic"></span>
                  </div>
                  <h5>Contact Details</h5>
                  <ul>
                    <li>
                      Phone: <a href="tel:02266518841" style={{ color: '#747474' }}>+91 22 6651 8841 </a> /<br /> 
                      <a href="tel:02266363268" style={{ color: '#747474' }}>+91 22 6636 3268</a>
                    </li>
                    <li>Email: <a href="mailto:sales@hexindiafasteners.com" style={{ color: '#747474' }}>sales@hexindiafasteners.com</a></li>
                    <li>Website: <a href="http://hexindiafasteners.com" target="_blank" rel="noreferrer" style={{ color: '#747474' }}>www.hexindiafasteners.com</a></li>
                  </ul>
                </div>
                <span className="h_el_01"></span>
                <span className="h_el_02"></span>
              </div>
              {/* End contact info hexagon right */}

              {/* Central Contact Form */}
              <form id="contact_form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-red-500' : ''}
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''}
                />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'border-red-500' : ''}
                />
                
                {/* Dynamic Captcha Area */}
                <div style={{ display: 'block', marginBottom: '10px', marginTop: '10px' }}>
                  <img 
                    src={captchaUrl} 
                    onClick={refreshCaptcha} 
                    style={{ cursor: 'pointer', border: '1px solid #ddd', height: '60px', width: '200px', display: 'block' }} 
                    title="Click to refresh security code"
                    alt="Captcha code"
                  />
                </div>
                
                <input
                  id="security_code"
                  name="securityCode"
                  type="text"
                  placeholder="Security Code"
                  value={formData.securityCode}
                  onChange={handleChange}
                  className={errors.securityCode ? 'border-red-500' : ''}
                  style={{ height: 'auto' }}
                />
                
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="9"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'border-red-500' : ''}
                ></textarea>
                
                <input
                  type="submit"
                  value="Send"
                  name="submit"
                  id="submit"
                  className="button_style_03_large arrow"
                  style={{ width: '100%' }}
                />
              </form>

            </div>
          </section>

          {/* Mail toggle floating section if present */}
          <section className="contact_form_section">
            <div className="container relative">
              <form id="contact_form" onSubmit={(e) => { e.preventDefault(); }}>
                <img src="/images/icons_type_03_mail.png" alt="" />
                <textarea defaultValue="Ask a question"></textarea>
                <button type="submit">
                  <span>Send <br /> Message</span>
                  <span className="hex_elem_rounded_type_2">
                    <span className="h_el_01"></span>
                    <span className="h_el_02"></span>
                  </span>
                </button>
              </form>
              <button className="close_form">&#215;</button>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
