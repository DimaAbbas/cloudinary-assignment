import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './AssignedPhotos.scss';

function AssignedPhotos() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        try {
            axios.get('http://localhost:4000/tags').then(response => {
                const data = response.data;
                setTags(data);
            })
        } catch (error) {
            console.log(error);
        }
    }, [tags]);

    async function handlePhotoRemove(photoUrl:any, tagName:any) {
        //console.log(photoUrl + " " + tagName);
        try {
            tags.filter(async (tag:any) => {
                if(tag.name === tagName){
                    let newPhotos = tag.photos;
                    newPhotos = newPhotos.filter((photo:any) => {
                        return photo != photoUrl; 
                    })
                    const response = await axios.patch(`http://localhost:4000/tags/${tag.id}`, {"photos": newPhotos});
                }
            })
        } catch (error) {
            console.log(error);
        }
        try {
            let response = await axios.get('http://localhost:4000/images');
            let photos = response.data;
            //console.log(photos);
            let photoInfo = photos.filter((photo:any) => {
                if(photo.url === photoUrl){
                    return photo;
                }
            });
            let tags = photoInfo[0].tags.filter((tag:any) => {
                if(tag != tagName){
                    return tag;
                }
            })
            console.log(tags);
            try {
                const response = await axios.patch(`http://localhost:4000/images/${photoInfo[0].id}`, {'tags' : tags});
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='AssignedPhotos'>
            {tags.map((tag: any, index: number) => {
                return (
                    <div key={index} className='tagBox' style={{border: `2px solid ${"#" + tag.color}`}}>
                        <div className='tagName' style={{ "backgroundColor": `${"#" + tag.color}` }}>
                            <p>{tag.name}</p>
                        </div>
                        <div className='tagPhotos'>
                            {tag.photos.map((photo: any, index_: number) => {
                                return (
                                    <div key={index_} className='photo'>
                                        <img src={photo} alt="" />
                                        <DeleteOutlineIcon sx={{ fontSize: 30 }} onClick={() => handlePhotoRemove(photo, tag.name)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default AssignedPhotos;