import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import './SignIn.css';
import { loginValidation, passwordValidation } from './validation';

interface ISignForm {
  istrue: boolean;
  login: string;
  password: string;
}

export const SignIn: React.FC = () => {
  const { handleSubmit, control } = useForm<ISignForm>();
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<ISignForm> = (data) => {
    console.log(data);
  };
  console.log('errors: ', errors);
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
      <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              label="Your login"
              autoComplete="off"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Your password"
              autoComplete="off"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button
          variant="contained"
          type="submit"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}>
          Sign in
        </Button>
      </form>
      <Typography
        variant="subtitle2"
        component="div"
        gutterBottom={true}
        className="auth-form__subtitle"
        sx={{
          marginTop: 1.5,
        }}>
        Not registered yet?
      </Typography>
    </div>
  );
};
