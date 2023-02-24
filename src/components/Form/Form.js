import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, InputAdornment, Grid, TextField, Checkbox } from '@mui/material';

import { regexpEnum } from '../../configs/regexp.enum';
import css from '../../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendFormData } from '../../store/user.slice';
import { Navigate } from 'react-router-dom';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const res = useSelector(state => state.userStore);
    const sendForm = (data) => {
        dispatch(sendFormData(data));
    }
    return (
        <div className={css.container}>
            <div className={css.page_container}>
                { res.status === 'fulfilled' ? <Navigate to={'/form/success'}/> : ''}
                <h2>Анкета абитуриента</h2>
                <form onSubmit={handleSubmit((data) => sendForm(data))}>
                    <Grid container spacing={6} paddingX={8} paddingY={2}>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label={'Фамилия'}
                                variant={'standard'}
                                fullWidth
                                autoComplete="surname"
                                {...register('surname', {
                                    required: 'This field is required', pattern: {
                                        value: '',
                                        message: 'Неверный формат'
                                    }
                                })}
                                error={!!errors.surname}
                                helperText={errors?.surname ? errors.surname.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label={'Имя'}
                                variant={'standard'}
                                fullWidth
                                autoComplete="name"
                                {...register('name', {
                                    required: 'This field is required', pattern: {
                                        value: '',
                                        message: 'Неверный формат'
                                    }
                                })}
                                error={!!errors.name}
                                helperText={errors?.name ? errors.name.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label={'Отчество'}
                                variant={'standard'}
                                fullWidth
                                autoComplete="fatherName"
                                {...register('fatherName')}
                                error={!!errors.fatherName}
                                helperText={errors?.fatherName ? errors.fatherName.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label={'e-mail'}
                                variant={'standard'}
                                fullWidth
                                autoComplete="email"
                                {...register('email', {
                                    required: 'This field is required', pattern: {
                                        value: regexpEnum.EMAIL,
                                        message: 'Invalid email format'
                                    }
                                })}
                                error={!!errors.email}
                                helperText={errors?.email ? errors.email.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+373</InputAdornment>,
                                }}
                                label={'номер телефона'}
                                variant={'standard'}
                                fullWidth
                                autoComplete="phone"
                                {...register('phone', {
                                    required: 'This field is required', pattern: {
                                        value: regexpEnum.PHONE,
                                        message: 'Неверный формат телефона'
                                    }
                                })}
                                error={!!errors.phone}
                                helperText={errors?.phone ? errors.phone.message : null}
                            />
                            <Checkbox  {...register('viber')} defaultChecked size={'small'}/>
                            <span style={{ fontSize: '12px', color: '#626262' }}>Viber </span>
                            <Checkbox  {...register('telegram')} defaultChecked size={'small'}/>
                            <span style={{ fontSize: '12px', color: '#626262' }}>Telegram </span>
                        </Grid>


                        <Grid item xs={12} sm={8}>
                            <TextField
                                label={'Название и адрес церкви'}
                                variant={'standard'}
                                fullWidth
                                autoComplete="church"
                                {...register('church', {
                                    required: 'This field is required', pattern: {
                                        value: '',
                                        message: 'Неверный формат'
                                    }
                                })}
                                error={!!errors.church}
                                helperText={errors?.church ? errors.church.message : null}
                            />

                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField
                                id="birthDate"
                                label="Дата рождения"
                                type="date"
                                defaultValue=""
                                fullWidth={true}
                                sx={{ width: 180 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register('birthDate', {
                                    required: 'Required'
                                })}
                                error={!!errors.birthDate}
                                helperText={errors?.birthDate ? errors.birthDate.message : null}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField
                                id="repentanceDate"
                                label="Дата покаяния"
                                type="date"
                                fullWidth
                                defaultValue=""
                                sx={{ width: 180 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register('repentanceDate', {
                                    required: 'Required'
                                })}
                                error={!!errors.repentanceDate}
                                helperText={errors?.repentanceDate ? errors.repentanceDate.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                id="baptismDate"
                                label="Дата крещения"
                                type="date"
                                defaultValue=""
                                sx={{ width: 180 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register('baptismDate', {
                                    required: 'Required'
                                })}
                                error={!!errors.fatherName}
                                helperText={errors?.baptismDate ? errors.baptismDate.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>

                            <TextField
                                label={'Для вступивших в брак - имя жены(мужа)'}
                                variant={'standard'}
                                fullWidth
                                autoComplete="spouseName"
                                {...register('spouseName')}
                                error={!!errors.spouseName}
                                helperText={errors?.spouseName ? errors.spouseName.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={7}>

                            <TextField
                                label={'Имена и возраст детей'}
                                variant={'standard'}
                                fullWidth
                                multiline
                                autoComplete="children"
                                {...register('children')}
                                error={!!errors.children}
                                helperText={errors?.children ? errors.children.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={'Имена родителей, братьев, сестёр'}
                                variant={'standard'}
                                multiline
                                fullWidth
                                autoComplete="siblings"
                                {...register('siblings')}
                                error={!!errors.siblings}
                                helperText={errors?.siblings ? errors.siblings.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={'Опишите кратко ваше служение'}
                                variant={'standard'}
                                fullWidth
                                multiline
                                autoComplete="ministry"
                                {...register('ministry', {
                                    required: 'This field is required', pattern: {
                                        value: '',
                                        message: 'Неверный формат'
                                    }
                                })}
                                error={!!errors.ministry}
                                helperText={errors?.ministry ? errors.ministry.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <TextField
                                label={'Фамилия и имя служителя, который сможет дать вам рекомендацию '}
                                variant={'standard'}
                                fullWidth
                                autoComplete="minister"
                                {...register('minister', {
                                    required: 'This field is required'
                                })}
                                error={!!errors.minister}
                                helperText={errors?.minister ? errors.minister.message : null}
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <Button fullWidth style={{ marginTop: '20px' }}
                                    color={'primary'} type={'submit'} variant={'contained'}>Отправить</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
        ;
};

export default Form;