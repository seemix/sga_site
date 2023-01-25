import React from 'react';
import { Link } from 'react-router-dom';

import './Slide.css';
const Slide = ({slide}) => {
    return (
        <>
            <img src={slide.image} alt={'pic'}/>
            <p className={'text_excerpt'}>
                {slide.text}
                <br/>
                <Link to={`/news/${slide._id}`} className={'full_link'}>Read more</Link>
            </p>
        </>
    );
};

export default Slide;