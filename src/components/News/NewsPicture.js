import * as React from 'react';
import { CardMedia } from "@mui/material";

const NewsPicture = ({picture}) => {

    return (
        <>
            <CardMedia
                style={{
                    width: 'auto',
                    maxHeight: '90%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                component="img"
                alt={'picture'}
                height="100%"
                image={picture}
                title=""
            />
        </>
    )
}

export default NewsPicture;