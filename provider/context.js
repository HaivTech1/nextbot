import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useContext, useReducer, useEffect, useState } from 'react';
import client from './client';
import Reducer, { initialState } from './reducer';

// create new context
const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [user, setUser] = useState([]);
  const [sender, setSender] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const accessToken = Cookies.get('app_accessToken');

  const authClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const loggedInUser = async () => {
    await authClient
      .get('/users/profile')
      .then((response) => {
        const { data } = response.data;
        setUser(data[0]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const listAuth = async () => {
    try {
      client()
        .get('/sendwa/listSender')
        .then((response) => {
          console.log(response.data);
          const { data } = response.data;
          setSender(data);
        })
        .catch((error) => {
          if (error.status !== 422) throw error;
        });
    } catch (e) {
      console.log(e);
    }
  };

  const listContact = async () => {
    try {
      client()
        .get('/kontak/listKontak')
        .then((response) => {
          console.log(response.data);
          const { data } = response.data;
          setContacts(data);
        })
        .catch((error) => {
          if (error.status !== 422) throw error;
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loggedInUser();
    listAuth();
    listContact();
  }, []);

  const value = {
    user,
    sender,
    contacts,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAdmin = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useAdmin must be used within Context');
  }

  return context;
};
