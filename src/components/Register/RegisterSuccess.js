import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { resetState } from '../../store/user.slice';
import css from '../../App.module.css';
import { Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
    }, [])
    return (
        <div className={css.container}>
            <div className={css.page_container}>
                <Paper style={{padding: '20px'}}>
                    <h3>
                        Регистрация прошла успешнно
                    </h3>
                    <h2>
                        <HowToRegIcon fontSize={'large'}/>
                    </h2>
                    <p>
                        Используйте указанные вами данные для входа в систему
                    </p>
                    <Link to={'/login'}>
                    <Button fullWidth
                            variant="contained">
                        Войти
                    </Button>
                    </Link>
                </Paper>
            </div>
        </div>
    );
};

export default RegisterSuccess;