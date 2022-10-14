import React, { useState } from 'react';
import { LoaderIcon } from 'react-hot-toast';
import siteMetadata from '../utils/siteMetadata';
import AuthSessionStatus from './AuthSessionStatus';
import AuthValidationErrors from './AuthValidationErrors';
import Label from './form/Label';
import TextInput from './form/TextInput';
import Loader from './Loader';

const AuthModal = ({ isOpen, errors, status, setStatus, setErrors, setAutheticate, submitHandler, submitLoginHandler, type, setType }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  });

  const updateFields = (e) => {
    e.persist();

    setFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const switchType = () => {
    setType(!type)
  }

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    setAutheticate(false)
  };

  const handleRegister = (e) => {
    e.preventDefault()
    setIsLoading(true)
    submitHandler(fields)
    setIsLoading(false)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    submitLoginHandler(fields)
    setIsLoading(false)
  }

  return (
    <>
      <div className="fade-in-out fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none transition focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-5xl">
          <div className="relative flex w-full sm:w-96 flex-col rounded-lg border-0 bg-white px-4 pb-5 text-center shadow-lg outline-none focus:outline-none">
            <div className="mt-5">
              <div className="flex justify-end p-2">
                <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
              </div>
            </div>

              <div className="w-full sm:pt-4">
                <AuthSessionStatus className="mb-4" status={status} />
                <AuthValidationErrors errors={errors} />
              </div>

              {type ? 
                <form onSubmit={handleLogin}>
                  <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" >
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign into {siteMetadata.title}</h3>
                    <div>
                          <Label> Your Email </Label>
                          <TextInput type="text" name="email" id="email"  value={fields.email} onChange={updateFields} placeholder="name@company.com" />
                        </div>
                    <div>
                          <Label> Your Password </Label>
                          <TextInput type="password" name="password" id="password"  value={fields.password} onChange={updateFields} placeholder="••••••••" />
                        </div>

                        <div className="flex justify-between space-x-2">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="text-sm ml-3">
                                <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm text-primary-700 hover:underline dark:text-primary-500">Lost Password?</a>
                        </div>

                        <button type="submit" className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login to your account</button>
                        
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <button onClick={switchType} type="button" className="text-primary-700 hover:underline dark:text-primary-500">Create account</button>
                        </div>
                  </div>
                </form>
                :
                <form onSubmit={handleRegister}>
                    <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" >
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create {siteMetadata.title} Account</h3>
                      <div>
                        <Label> Your Username </Label>
                          <TextInput type="text"  name="username" id="username"  value={fields.username} onChange={updateFields} placeholder="John Doe" />
                      </div>
                      <div>
                          <Label> Your Email </Label>
                          <TextInput type="text" name="email" id="email"  value={fields.email} onChange={updateFields} placeholder="name@company.com" />
                      </div>
                      <div>
                          <Label> Your Password </Label>
                          <TextInput type="password" name="password" id="password"  value={fields.password} onChange={updateFields} placeholder="••••••••" />
                      </div>
                      
                      <button type="submit" className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      <>
                      {isLoading ? (
                        <div className="flex justify-center">
                          <LoaderIcon />
                        </div>
                      ) : (
                        'Submit'
                      )}
                      </>
                      </button>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Registered? <button onClick={switchType} type="button" className="text-primary-700 hover:underline dark:text-primary-500">Sign in</button>
                      </div>
                    </div>
                </form>
              }
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25" />
    </>
  );
};

export default AuthModal;
