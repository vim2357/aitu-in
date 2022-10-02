import React from 'react';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import './auth-form.css';

export const AuthForm: React.FC = () => {
  return (
    <div className="auth-form">
      <Typography variant="h3" component="div">
        Sign in
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className="auth-form__subtitle">
        To get access
      </Typography>
    </div>
  );
};
