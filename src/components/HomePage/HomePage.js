import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './HomePage.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../store/news.slice';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import Slide from '../Slide/Slide';

const HomePage = () => {
    const {news, status} = useSelector(state => state.newsStore);
    const dispatch = useDispatch();
    const params = { limit: 3 };
    useEffect(() => {
        dispatch(getAllNews(params));
    }, [dispatch]);
    return (
        <>
            {status === 'loading' ? <Backdrop open={true}><CircularProgress/></Backdrop> : ''}
            <Swiper
                loop={true}
                autoplay={{ delay: 6000 }}
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {news && news.map((item, index) =><SwiperSlide key={index}><Slide key={index} slide={item}/></SwiperSlide>)}
            </Swiper>

        </>
    );
};

export default HomePage;