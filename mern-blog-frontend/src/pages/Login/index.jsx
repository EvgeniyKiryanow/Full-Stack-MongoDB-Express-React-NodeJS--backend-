import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import {useForm} from "react-hook-form"
import styles from "./Login.module.scss";
import { fetchAuth } from "../../redux/slices/auth";

export const Login = () => {
   
  const dispatch = useDispatch();
  const { register, handleSubmit, setErrors, formState: {errors, isValid}} = useForm({
    defaultValues: {
      email: '12test@gmail.com',
      password: '12345'
    },
    mode: 'onChange'
  })

  const onSubmit = (values) => {
    dispatch(fetchAuth(values))
  }

  console.log(errors, isValid)
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', {required: 'Send mail' })}
          fullWidth
          type="sumbit"
        />
        <TextField className={styles.field} 
          {...register('password', {required: 'Send Pass' })} 
          helperText={errors.password?.message} 
          error={Boolean(errors.password?.message)} 
          label="Пароль" 
          fullWidth 
          type="sumbit"
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
