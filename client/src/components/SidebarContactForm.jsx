import React, { useState, useEffect } from 'react';

const SidebarContactForm = () => {
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
      tempErrors.name = 'Please enter your Name.';
    }
    if (!formData.email.trim() || formData.email === 'Email') {
      tempErrors.email = 'Please enter your Email.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid Email.';
      }
    }
    if (!formData.phone.trim() || formData.phone === 'Phone No.') {
      tempErrors.phone = 'Please enter your Phone number.';
    } else if (isNaN(formData.phone)) {
      tempErrors.phone = 'Please enter a valid numeric phone number.';
    } else if (formData.phone.length < 10 || formData.phone.length > 11) {
      tempErrors.phone = 'Phone number must be 10 or 11 digits.';
    }
    if (!formData.message.trim() || formData.message === 'Message') {
      tempErrors.message = 'Please enter your Message.';
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
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            securityCode: '',
            message: '',
          });
          refreshCaptcha();
        })
        .catch((err) => {
          console.error(err);
          alert(err.message || 'Failed to send message.');
          refreshCaptcha();
        });
    } else {
      // Alert first validation error like the legacy site
      if (!formData.name.trim() || formData.name === 'Name') {
        alert('Please enter your Name.');
        return;
      }
      if (!formData.email.trim() || formData.email === 'Email') {
        alert('Please enter your Email.');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid Email.');
        return;
      }
      if (!formData.phone.trim() || formData.phone === 'Phone No.') {
        alert('Please enter your Phone number.');
        return;
      }
      if (isNaN(formData.phone)) {
        alert('Please enter a valid numeric phone number.');
        return;
      }
      if (formData.phone.length < 10 || formData.phone.length > 11) {
        alert('Phone number must be 10 or 11 digits.');
        return;
      }
      if (!formData.message.trim() || formData.message === 'Message') {
        alert('Please enter your Message.');
        return;
      }
      if (!formData.securityCode.trim() || formData.securityCode === 'Security Code') {
        alert('Please enter the Security Code.');
        return;
      }
    }
  };

  return (
    <figure className="widget">
      <figcaption>
        <h4>Contact Us</h4>
      </figcaption>
      <div className="relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'border-red-500' : ''}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'border-red-500' : ''}
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'border-red-500' : ''}
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <div 
              className="border border-[#dcdcdc] text-center select-none flex justify-center items-center h-[50px] cursor-pointer bg-white"
              onClick={refreshCaptcha}
              title="Click to refresh security code"
            >
              <img src={captchaUrl} alt="Security Code" className="h-full object-contain" />
            </div>
            <input
              type="text"
              name="securityCode"
              placeholder="Security Code"
              value={formData.securityCode}
              onChange={handleChange}
              className={errors.securityCode ? 'border-red-500' : ''}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`h-[120px] ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-themeBlue text-white hover:bg-themeTeal transition-all duration-300 font-bold uppercase py-3 w-full text-center cursor-pointer text-[13px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </figure>
  );
};

export default SidebarContactForm;
