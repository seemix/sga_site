import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Alert, Button, Card, CardMedia, Modal } from '@mui/material';

import css from '../../App.module.css';
import './NewsSingle.css';
import { getNewsById } from '../../store/news.slice'

const NewsSingle = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    const newsItem = useSelector(state => state.newsStore);

    useEffect(() => {
        dispatch(getNewsById(id));
    }, [dispatch, id])

    const { title, text, image, createdAt } = newsItem.single;
    // console.log(newsItem.status);
    return (
        <div className={css.container}>
            <div className={css.page_container}>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Card className={'modal_image'}>
                        <img src={image} alt={'picture'} width={'100%'}/>
                    </Card>
                </Modal>
                <Link to={'../news'}><Button style={{ marginBottom: '15px' }}>Новости</Button></Link>

                {newsItem.status === 'loading' ? <Backdrop open={true}><CircularProgress/></Backdrop> : ''}
                {newsItem.status === 'rejected' || newsItem.error ?
                    <Alert severity="error">Information not found! {newsItem.error}</Alert> : ''}
                {image &&
                    <CardMedia
                        onClick={handleOpen}
                        style={{ cursor: 'pointer' }}
                        component="img"
                        alt={title}
                        height="350"
                        image={image}
                        title=""
                    />
                }
                <h2>{title}</h2>
                <p className={'category_link'}>
                    {
                        createdAt && createdAt.substring(0, 10).split('-').reverse().join('-').replaceAll('-', '.')
                    }
                </p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default NewsSingle;