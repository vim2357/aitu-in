import { Typography } from '@mui/material';
import React from 'react';
import { AuthForm } from '../auth-form/AuthForm';
import './auth-page.css';
export const AuthPage: React.FC = () => {
  return (
    <div className="auth-page">
      <AuthForm />
    </div>
  );
};
