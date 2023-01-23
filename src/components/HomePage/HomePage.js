import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './HomePage.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import Slide from '../Slide/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../store/news.slice';

const HomePage = () => {
    const {news} = useSelector(state => state.newsStore);
    const dispatch = useDispatch();
    const params = { limit: 3 };
    useEffect(() => {
        dispatch(getAllNews(params));
    }, [dispatch]);
    return (
        <>
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
                {/*<SwiperSlide>*/}
                {/*    <img style={{ position: 'relative' }}*/}
                {/*         src="https://images.pexels.com/photos/668465/pexels-photo-668465.jpeg" alt="123"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>*/}
                {/*    <Slide/>*/}
                {/*</SwiperSlide>*/}
                {news && news.map((item, index) =><SwiperSlide><Slide key={index} slide={item}/></SwiperSlide>)}
            </Swiper>

        </>
    );
};

export default HomePage;