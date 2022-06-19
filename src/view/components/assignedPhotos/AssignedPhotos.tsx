import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AssignedPhotos() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        getTags();
    }, []);

    async function getTags(){
        try {
            const response = await axios.get('http://localhost:3004/tags');
            if(response){
                setTags(response.data);
                console.log(response);
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(tags);

    return (
        <div className='AssignedPhotos'>
            {tags.map((tag:any, index:number) => {
                return(
                    <div key={index} className='tagInfo'>
                        <p className='tagName' style={{"backgroundColor":`${"#"+tag.color}`}}>{tag.name}</p>
                        {tag.photos.map((photo:any, index_:number) => {
                            return(
                                <div className='tagPhotos'>
                                    <img src={photo} alt="" />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default AssignedPhotos;