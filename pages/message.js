import React, { useState } from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { Footer } from '../components/Footer';
import Label from '../components/form/Label';
import TextInput from '../components/form/TextInput';
import { Hero } from '../components/Hero';
import { Meta } from '../components/layout/Meta';
import List from '../components/List';
import { useAdmin } from '../provider/context';
import siteMetadata from '../utils/siteMetadata';
import { useAuth } from '../utils/useAuth';

const Message = () => {
  const { sender, contacts } = useAdmin();

  const { sendSingle, sendExcel } = useAuth();

  const [fields, setFields] = useState({
    sender: '',
    number: '',
    message: '',
  });
  const [file, setFile] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
    }
  };

  const updateFields = (e) => {
    e.persist();

    setFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const hadleSingleSend = (e) => {
    e.preventDefault();
    sendSingle({ fields, setFields });
  };

  const hadleExcelSend = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('data', JSON.stringify(fields));
    formData.append('file', file);

    console.log(file);
    console.log(fields);
    console.log(formData);

    sendExcel({ formData, setFields });
  };

  return (
    <div className="antialiased text-gray-600">
      <Meta title="License" description={siteMetadata.description} />
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2  place-items-center min-h-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Send Single Message
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={hadleSingleSend}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <select
                  name="sender"
                  value={fields.sender}
                  onChange={updateFields}
                  className="form-select form-select-lg mb-3
          appearance-none
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Devices</option>
                  {sender.map((send, index) => (
                    <option key={index} value={send.id}>
                      {send.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="number"
                  value={fields.number}
                  onChange={updateFields}
                  className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Phone numbers</option>
                  {contacts.map((contact, index) => (
                    <option key={index} value={contact.hp}>
                      {contact.hp} {contact.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Text Message
                </Label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your message..."
                  value={fields.message}
                  onChange={updateFields}
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaMailBulk
                    className="h-5 w-5 text-primary-500 group-hover:text-primary-400"
                    aria-hidden="true"
                  />
                </span>
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Send Media Message
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={hadleSingleSend}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <select
                  name="sender"
                  value={fields.sender}
                  onChange={updateFields}
                  className="form-select form-select-lg mb-3
          appearance-none
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Devices</option>
                  {sender.map((send, index) => (
                    <option key={index} value={send.id}>
                      {send.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="number"
                  value={fields.number}
                  onChange={updateFields}
                  className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Phone numbers</option>
                  {contacts.map((contact, index) => (
                    <option key={index} value={contact.hp}>
                      {contact.hp} {contact.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Text Message
                </Label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your message..."
                  value={fields.message}
                  onChange={updateFields}
                ></textarea>
              </div>

              <div className="mt-2">
                <Label> Select File </Label>
                <TextInput
                  type="file"
                  name="file"
                  id="file"
                  value={fields.file}
                  onChange={updateFields}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaMailBulk
                    className="h-5 w-5 text-primary-500 group-hover:text-primary-400"
                    aria-hidden="true"
                  />
                </span>
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Broadcast WhatsApp Text Only
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={hadleSingleSend}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <select
                  name="sender"
                  value={fields.sender}
                  onChange={updateFields}
                  className="form-select form-select-lg mb-3
          appearance-none
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Devices</option>
                  {sender.map((send, index) => (
                    <option key={index} value={send.id}>
                      {send.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <TextInput
                  type="text"
                  name="number"
                  id="number"
                  value={fields.number}
                  onChange={updateFields}
                  placeholder="2349066100815, 2348027117093"
                />
              </div>

              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Text Message
                </Label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your message..."
                  value={fields.message}
                  onChange={updateFields}
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaMailBulk
                    className="h-5 w-5 text-primary-500 group-hover:text-primary-400"
                    aria-hidden="true"
                  />
                </span>
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Broadcast WhatsApp White Excel
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={hadleExcelSend}
            enctype="multipart/form-data"
          >
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <select
                  name="sender"
                  value={fields.sender}
                  onChange={updateFields}
                  className="form-select form-select-lg mb-3
          appearance-none
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Devices</option>
                  {sender.map((send, index) => (
                    <option key={index} value={send.id}>
                      {send.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-2">
                <Label> Select File </Label>
                <TextInput
                  type="file"
                  name="filename"
                  onChange={uploadToClient}
                />
                <span>
                  Download Layout Upload{' '}
                  <a target="blank" href="/assets/excel/layout.xlsx">
                    Link Download
                  </a>
                </span>
              </div>

              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Text Message
                </Label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your message..."
                  value={fields.message}
                  onChange={updateFields}
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaMailBulk
                    className="h-5 w-5 text-primary-500 group-hover:text-primary-400"
                    aria-hidden="true"
                  />
                </span>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Message;
