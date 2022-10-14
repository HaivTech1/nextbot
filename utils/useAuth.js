import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import client from '../provider/client';
import Cookies from 'js-cookie';

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();

  const { data: user, error } = useSWR('/profile', () =>
    client()
      .get('/users/profile')
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
        router.push('/verify-email');
        toast.error(error);
      })
  );

  const register = async ({
    setErrors,
    setStatus,
    setAutheticate,
    setType,
    ...props
  }) => {
    setErrors([]);
    setStatus(null);
    setAutheticate(true);
    setType(false);
    try {
      client()
        .post('/users/add-users', props)
        .then((response) => {
          console.log(response.data);
          setStatus(response.data.message);
          setInterval(() => {
            setType(true);
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          setErrors(Object.values(error.response.data.message).flat());
          if (error.status !== 422) throw error;
        });
    } catch (e) {
      console.log(e);
    }
  };

  const login = async ({ setErrors, setStatus, setAutheticate, ...props }) => {
    setErrors([]);
    setStatus(null);
    setAutheticate(true);
    try {
      client()
        .post('/auth', props)
        .then((response) => {
          setStatus(response.data.message);
          Cookies.set('app_accessToken', response.data.token, {
            path: '/',
            expires: response.data.expires_in,
            sameSite: true,
          });

          setInterval(() => {
            setAutheticate(false);
            window.location.pathname = '/';
          }, 2000);
          toast.success('Welcome back!');
        })
        .catch((error) => {
          if (error.status !== 422) throw error;
          setErrors(Object.values(error.response.data.message).flat());
        });
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };

  const logout = async () => {
    Cookies.remove('app_accessToken');
    window.location.pathname = '/';
  };

  const sendSingle = async ({ setFields, ...props }) => {
    try {
      client()
        .post('/send-message', props)
        .then((response) => {
          console.log(response.data);
          toast.success(response.data.message);
          setFields({ sender: '', number: '', message: '' });
        })
        .catch((error) => {
          console.error(error);
          toast.error(Object.values(error.response.data.message).flat());
          if (error.status !== 422) throw error;
        });
    } catch (e) {
      console.log(e);
    }
  };

  const sendExcel = async ({ setFields, ...props }) => {
    try {
      client()
        .post('/send-broadcast-excel', props)
        .then((response) => {
          console.log(response.data);
          toast.success(response.data.message);
          setFields({ sender: '', number: '', message: '' });
        })
        .catch((error) => {
          console.error(error);
          toast.error(Object.values(error.response.data.message).flat());
          if (error.status !== 422) throw error;
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);
    if (middleware === 'auth' && error) logout();
    if (middleware === 'verify' && error) router.push(redirectIfAuthenticated);
  }, [user, error]);

  return {
    user,
    register,
    login,
    logout,
    sendSingle,
    sendExcel,
  };
};
