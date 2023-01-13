import React, {useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {Alert, CardMedia} from "@mui/material";

import css from "../../App.module.css";
import './NewsSingle.css';
import {getNewsById} from '../../store/news.slice'
//TODO make link to back or news
//TODO make backdrop with image

const NewsSingle = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const newsItem = useSelector(state => state.newsStore);

    useEffect(() => {
        dispatch(getNewsById(id));
    }, [dispatch, id])

    const {title, text, image, createdAt} = newsItem.single;
    return (
        <div className={css.container}>
            <div className={css.page_container}>
                <p className={'category_link'}>Главная / <Link to={'../news'}>Новости</Link></p>
                {newsItem.status === 'loading' ? <Backdrop open={true}><CircularProgress/></Backdrop> : ''}
                {newsItem.status === 'rejected' || newsItem.error ?
                    <Alert severity="error">Information not found! {newsItem.error}</Alert> : ''}

                {image && <CardMedia
                    component="img"
                    alt={title}
                    height="450"
                    image={image}
                    title=""
                />}
                <h2>{title}</h2>
                <p className={'category_link'}>
                    <i>
                        {
                            createdAt && createdAt.substring(0, 10).split('-').reverse().join('-').replaceAll('-', '.')
                        }
                    </i>
                </p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default NewsSingle;