import { Typography } from '@mui/material';
import React from 'react';
import { SignIn } from './signin-form/SignIn';
import './auth-page.css';
export const AuthPage: React.FC = () => {
  return (
    <div className="auth-page">
      <SignIn />
    </div>
  );
};
