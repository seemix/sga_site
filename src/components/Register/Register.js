import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import css from '../../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/user.slice';
import { Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import registerValidator from '../../validators/register.validator';
import { joiResolver } from '@hookform/resolvers/joi';

const Login = () => {
    const sendForm = (data) => {
        dispatch(registerUser(data));
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: joiResolver(registerValidator) });
    const dispatch = useDispatch();
    const response = useSelector(state => state.userStore);

    return (
        <div className={css.container}>
            <div className={css.page_container}>
                <Container maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <HowToRegIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <form onSubmit={handleSubmit((data) => sendForm(data))}>
                                <TextField
                                    margin={'normal'}
                                    label={'Email Address'}
                                    variant={'outlined'}
                                    fullWidth
                                    autoComplete="email"
                                    {...register('email')}
                                    error={!!errors.email}
                                    helperText={errors?.email ? errors.email.message : null}
                                />
                                <TextField
                                    margin={'normal'}
                                    label={'Password'}
                                    variant={'outlined'}
                                    fullWidth
                                    type={'password'}
                                    autoComplete="password"
                                    {...register('password')}
                                    error={!!errors.password}
                                    helperText={errors?.password ? errors.password.message : null}
                                />
                                <TextField
                                    margin={'normal'}
                                    label={'Confirm Password'}
                                    variant={'outlined'}
                                    fullWidth
                                    type={'password'}
                                    autoComplete="password"
                                    {...register('confirmPassword')}
                                     error={!!errors.confirmPassword}
                                    helperText={errors?.confirmPassword ? errors.confirmPassword.message : null}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Register
                                </Button>
                            </form>

                        </Box>
                    </Box>
                </Container>
                {response.status === 'rejected' || response.error ?
                    <Alert severity="error">Registration Error: {response.error}</Alert> : ''}
                {response.status === 'fulfilled' ? <Navigate to={'/register/success'}/> : '' }
                {response.auth ? <Navigate to={'/'}/> : ''}
            </div>
        </div>
    );
}
export default Login;