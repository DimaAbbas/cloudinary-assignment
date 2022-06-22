import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Tags.scss';

function Tags() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        getTags();
    },[]);

    async function getTags() {
        try {
            const response = await axios.get('http://localhost:4000/tags');
            if (response) {
                setTags(response.data);
                //console.log(response);
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleTagRemove(tagName: any) {
        console.log(tagName);
        try {
            tags.filter(async (tag: any) => {
                if (tag.name === tagName) {
                    const response = await axios.delete(`http://localhost:4000/tags/${tag.id}`);
                    if (response) {
                        console.log(response.data);
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='Tags'>
            <h5>Availabe Tags</h5>
            {tags.map((tag: any, index: number) => {
                return (
                    <div key={index} className='tagInfo' style={{ 'backgroundColor': `${'#' + tag.color}` }}>
                        <p>{tag.name}</p>
                        <button onClick={() => handleTagRemove(tag.name)}>
                            <DeleteIcon sx={{ fontSize: 25, color: '#b5739d' }} />
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default Tags;