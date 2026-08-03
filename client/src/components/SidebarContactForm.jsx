import React from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { useEnquiryForm } from '../hooks/useEnquiryForm';

const SidebarContactForm = () => {
  const {
    isSuccess,
    setIsSuccess,
    referenceId,
    turnstileSiteKey,
    formMethods,
    onSubmit
  } = useEnquiryForm();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = formMethods;

  return (
    <div className="bg-[#f9fafd] border border-gray-100 rounded-xl p-6 shadow-sm w-full">
      <h4 className="text-primary font-extrabold text-xs uppercase tracking-widest border-b-2 border-primary pb-3 mb-4">
        Contact Us
      </h4>
      <div className="relative">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-4 bg-white">
            <h5 className="text-lg font-bold text-gray-900">Thank you!</h5>
            <p className="text-sm text-gray-600">Your enquiry has been received.</p>
            <div className="bg-gray-50 p-3 w-full rounded border border-gray-100">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Reference ID</p>
              <p className="text-xs font-mono font-bold text-[#0D8BC5] break-all">{referenceId}</p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-[#0D8BC5] font-bold text-xs hover:underline mt-2"
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit((data) => {
            data.subject = `Sidebar Enquiry (Path: ${window.location.pathname})`;
            data.company = 'Not provided';
            onSubmit(data);
          })} className="flex flex-col gap-1">
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register('name')}
                className={errors.name ? 'border-red-500' : ''}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone No."
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
              />
            </div>
            
            {/* Turnstile Captcha */}
            {turnstileSiteKey && (
              <div className="flex flex-col gap-2 mb-3 mt-1 overflow-hidden">
                <div className="w-full flex justify-center scale-95 origin-left sm:scale-100 sm:origin-center">
                  <Turnstile 
                    siteKey={turnstileSiteKey}
                    onSuccess={(token) => setValue('turnstileToken', token, { shouldValidate: true })}
                    onError={() => setValue('turnstileToken', '')}
                    onExpire={() => setValue('turnstileToken', '')}
                    options={{ theme: 'light', size: 'flexible' }}
                  />
                </div>
                {errors.turnstileToken && (
                  <p className="text-xs text-red-500 font-semibold">
                    {errors.turnstileToken.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <textarea
                placeholder="Message"
                rows="6"
                {...register('message')}
                className={`h-[120px] ${errors.message ? 'border-red-500' : ''}`}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="!bg-[#0d8bc5] !text-white hover:!bg-[#086a98] transition-all duration-300 font-bold uppercase py-3 w-full text-center cursor-pointer text-[13px] disabled:opacity-70 disabled:cursor-not-allowed border-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SidebarContactForm;
