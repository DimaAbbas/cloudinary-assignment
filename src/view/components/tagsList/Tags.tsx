import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Tags.scss';

function Tags() {
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

    return (
        <div className='Tags'>
            <h5>Availabe Tags</h5>
            {tags.map((tag: any, index: number) => {
                return (
                    <div key={index} className='tagInfo'>
                        <p>{tag.name}</p>
                        <button>remove</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Tags;