import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AuthConnectionsModal = ({
  isOpen,
  authConnection,
  setAuthConModal,
  user,
}) => {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const handleClose = () => {
    setAuthConModal(false);
  };

  const userDevices = authConnection.filter(
    (item) => item.userid == user.email
  );

  const Devices = (device) => {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="rounded-[10px] transition duration-100 hover:scale-105 lg:py-2 lg:px-2"
      >
        <motion.div
          variants={fadeInUp}
          tabIndex="0"
          className="my-3.5 overflow-hidden rounded-md border border-gray-200  transition duration-500 ease-linear md:my-0 md:mr-6"
        >
          <div className="p-2">
            <div className="">
              <Image
                src="/assets/images/cek.png"
                alt="dfhdfhdf"
                width="50"
                height="50"
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="px-2.5 py-4  md:px-3.5 md:py-6">
              <h2 className="text-header darkdark:text-white mb-3 text-base font-bold capitalize  md:text-lg">
                {device.device.id}
              </h2>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className="fade-in-out fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none transition focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-5xl">
          <div className="relative flex w-64 sm:w-96 flex-col rounded-lg border-0 bg-white px-4 pb-5 text-center shadow-lg outline-none focus:outline-none">
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
            <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
              <h3 className="text-xl text-center font-medium text-green-500 dark:text-white">
                Linked Devices
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {userDevices.map((device, index) => (
                <Devices key={index} device={device} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25" />
    </div>
  );
};

export default AuthConnectionsModal;
