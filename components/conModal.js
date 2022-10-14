import React, { useState } from 'react';
import siteMetadata from '../utils/siteMetadata';
import TextInput from './form/TextInput';
import Loader from './Loader';

const ConnectionModal = ({ isOpen, setConnection, connectionHandler }) => {
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setConnection(false);
  };

  const handleConnection = (e) => {
    e.preventDefault();
    setIsLoading(true);
    connectionHandler(number);
    setIsLoading(false);
  };

  if (!isOpen) {
    return null;
  }

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="fade-in-out fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none transition focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-5xl">
          <div className="relative flex w-full sm:w-96 flex-col rounded-lg border-0 bg-white px-4 pb-5 text-center shadow-lg outline-none focus:outline-none">
            <div className="mt-5">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <form onSubmit={handleConnection}>
                <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Link your whatsapp with {siteMetadata.title}
                  </h3>

                  <div>
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <div>
                        <TextInput
                          type="text"
                          name="number"
                          id="number"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          placeholder="2349066100815"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Connect
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25" />
    </div>
  );
};

export default ConnectionModal;
