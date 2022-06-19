import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './PhotosList.scss';

function PhotosList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPhotos();
    }, []);

    async function getPhotos() {
        try {
            const response = await axios.get(`http://localhost:3004/images`);
            if (response) {
                setPhotos(response.data);
                console.log(response);
            }
        } catch (error) {
            console.error(error);
        }
    }

    //console.log(photos);

    return (

        <div className='PhotosList'>
            {photos.map((photo: any, index: number) => {
                return (
                    <div key={index} className='photo'>
                        <img src={photo.url} alt="hi" />
                    </div>
                );
            })}
        </div>
    );
}

export default PhotosList;