import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

import './NewsItem.css';

const NewsItem = ({ item }) => {
    const { text, title, image, createdAt } = item;

    return (
        <div className={'card_wrapper'}>
            <Card className={'card'}>
                <Link to={'/news/' + item._id}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="240"
                            image={image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <h3>{title}</h3>
                            <p className={'date'}>
                                {createdAt.substring(0, 10).split('-').reverse().join('-').replaceAll('-', '.')}
                            </p>
                            <p>{text.substring(0, 100) + '...'}
                                {/*<Button style={{textAlign: 'right', display: 'inline'}} variant={'text'}>*/}
                                {/*    Read more*/}
                                {/*</Button>*/}
                            </p>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>);
};

export default NewsItem;