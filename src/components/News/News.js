import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAllNews } from '../../store/news.slice';
import css from '../../App.module.css';
import './News.css';
import NewsItem from './NewsItem';

const News = () => {
    const news = useSelector(state => state.newsStore);
    const dispatch = useDispatch();
    const params = { limit: '' };
    const handlePage = (event, page) => {
        params.page = page;
        dispatch(getAllNews(params));
    }
    useEffect(() => {
        params.page = 1;
        dispatch(getAllNews(params));
    }, [dispatch]);
    return (
        <div className={css.container}>
            <div className={css.page_container}>
                <h2>Новости</h2>
                {news.status === 'loading' ? <Backdrop open={true}><CircularProgress/></Backdrop> : ''}
                {news.status === 'error' ? <Navigate to={'/'}/> : ''}
                <div className={'news_wrapper'}>
                    {news.news && news.news.map((item, index) => <NewsItem key={index} item={item}/>)}
                    <Pagination shape={'rounded'} count={news.pages || 1} onChange={handlePage}/>
                </div>
            </div>
        </div>
    );
};

export default News;