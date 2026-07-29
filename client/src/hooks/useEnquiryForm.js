import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone required').max(15),
  company: z.string().max(100).optional(),
  subject: z.string().max(150).optional(),
  message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters').max(2000),
  turnstileToken: z.string().min(1, 'Please verify you are human'),
});

export const useEnquiryForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [turnstileSiteKey, setTurnstileSiteKey] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const API_URL = import.meta.env.DEV ? 'http://localhost:5000/api/enquiry/config' : 'https://new-design-3-1.onrender.com/api/enquiry/config';
        const res = await axios.get(API_URL);
        if (res.data.turnstileSiteKey) {
          setTurnstileSiteKey(res.data.turnstileSiteKey);
        }
      } catch (err) {
        console.error('Failed to fetch turnstile config', err);
        setTurnstileSiteKey('1x00000000000000000000AA');
      }
    };
    fetchConfig();
  }, []);

  const formMethods = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      turnstileToken: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const API_URL = import.meta.env.DEV ? 'http://localhost:5000/api/enquiry' : 'https://new-design-3-1.onrender.com/api/enquiry';
      const res = await axios.post(API_URL, data);
      
      if (res.data.success) {
        setReferenceId(res.data.referenceId);
        setIsSuccess(true);
        formMethods.reset();
        toast.success('Enquiry submitted successfully!');
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || 'Failed to submit enquiry. Please try again.';
      toast.error(errorMessage);
      formMethods.setValue('turnstileToken', '');
    }
  };

  return {
    isSuccess,
    setIsSuccess,
    referenceId,
    turnstileSiteKey,
    formMethods,
    onSubmit,
  };
};
