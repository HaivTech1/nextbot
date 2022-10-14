import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../components/layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { useAdmin } from '../provider/context';
import { useAuth } from '../utils/useAuth';
import AuthModal from './authModal';
import { Logo } from './Logo';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import ConnectionModal from './conModal';
import CodeModal from './CodeModal';
import { makeid } from '../utils/helper';
import toast from 'react-hot-toast';
import AuthenticateModal from './AuthenticateModal';
import AuthConnectionsModal from './AuthConnectionsModal';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Hero = () => {
  const { register, login, logout } = useAuth();
  const { user } = useAdmin();

  const socket = io('http://localhost:3000', {
    transports: ['websocket'],
  });

  const [authenticate, setAutheticate] = useState(false);

  const [authConnection, setAuthConnection] = useState([]);
  const [authConModal, setAuthConModal] = useState(false);

  const [connection, setConnection] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [type, setType] = useState(true);

  const [openQrcode, setOpenQrcode] = useState(false);
  const [qrcode, setQrcode] = useState([]);
  const [auth, setAuth] = useState(false);

  const submitHandler = (data) => {
    register({
      data,
      setErrors,
      setStatus,
      setAutheticate,
      setType,
    });
  };

  const submitLoginHandler = (data) => {
    login({
      data,
      setErrors,
      setStatus,
      setAutheticate,
    });
  };

  const connectionHandler = (number) => {
    socket.emit('create-session', {
      id: makeid(7),
      userid: user.email,
      description: number,
    });
  };

  useEffect(() => {
    socket.on('init', function (data) {
      setAuthConnection(data);
    });

    socket.on('qr', function (data) {
      setConnection(false);
      setOpenQrcode(true);
      setQrcode(data);
    });

    socket.on('message', function (data) {});

    socket.on('ready', function (data) {
      setAuth(true);
    });

    socket.on('authenticated', function (data) {
      setOpenQrcode(false);
      // toast.success('Account Added successfully!');
    });

    socket.on('remove-session', function (id) {
      console.log(data);
    });
  }, []);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          {user?.username ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  Navigation
                  <FaArrowAltCircleDown
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => setConnection(true)}
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Connect Device
                        </button>
                      )}
                    </Menu.Item>
                    {authConnection && (
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setAuthConModal(true)}
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Devices
                          </button>
                        )}
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/message"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Message
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          onClick={logout}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <li>
              <button onClick={() => setAutheticate(true)}>
                <a>Sign In</a>
              </button>
            </li>
          )}
        </NavbarTwoColumns>
      </Section>

      <AuthModal
        status={status}
        setErrors={setErrors}
        errors={errors}
        setStatus={setStatus}
        isOpen={authenticate}
        setAutheticate={setAutheticate}
        submitHandler={submitHandler}
        type={type}
        setType={setType}
        submitLoginHandler={submitLoginHandler}
      />

      <ConnectionModal
        isOpen={connection}
        setConnection={setConnection}
        connectionHandler={connectionHandler}
      />

      <CodeModal isOpen={openQrcode} qrcode={qrcode} />

      <AuthenticateModal isOpen={auth} setAuth={setAuth} />

      <AuthConnectionsModal
        isOpen={authConModal}
        authConnection={authConnection}
        setAuthConModal={setAuthConModal}
        user={user}
      />
    </Background>
  );
};

export { Hero };
