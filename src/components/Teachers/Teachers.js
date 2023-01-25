import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Card } from '@mui/material';

import derek from '../../images/Derek_-_Website.xl_-300x300.jpg';
import john from '../../images/John_-_Profile.xl_-300x300.jpg';
import clive from  '../../images/Clive_-_Website.l-300x300.jpg';
import chris from '../../images/Chris_-_Website.l-300x300.jpg';
import mark from  '../../images/Mark_-_Website.l-300x300.jpg';
import wayne from '../../images/Wayne_-_Website.xl_-300x300.jpg';

const Teachers = () => {
    return (
        <>
            <div className="swiper_wrap">
                <Swiper
                    autoHeight={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.25': {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Card>
                            <img src={john} alt="1"/>
                            <h5>John Birnie</h5>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <img src={derek} alt="1"/>
                            <h5>Derek Maxwell</h5>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <img src={mark} alt="1"/>
                            <h5>Mark Foster</h5>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <img src={chris} alt="1"/>
                            <h5>Chris</h5>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <img src={wayne} alt="1"/>
                            <h5>Wayne</h5>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <img src={clive} alt="1"/>
                            <h5>Clive Peter</h5>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Teachers;