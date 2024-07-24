import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isTokenExpired, logout } from '../Modal/SignIn/module/action/signin';

const InitializeApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTokenExpired()) {
      dispatch(logout());
    }
  }, [dispatch]);

  return null;
};

export default InitializeApp;
