import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Tags.scss';

function Tags() {
    //a state retains all the available tags in TAGS TABLE(json-server)
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
    }, []);

    function handleTagRemove(tagName: any) {
        //console.log(tagName);
        try {
            //Search for the tag by its name using the filter method to get its ID
            tags.filter(async (tag: any) => {
                if (tag.name === tagName) {
                    // AND then delete the tag from TAGS table by its ID
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
            <h4>Availabe Tags</h4>
            {tags.map((tag: any, index: number) => {
                return (
                    <div key={index} className='tagInfo' style={{ 'backgroundColor': `${'#' + tag.color}` }}>
                        <p>{tag.name}</p>
                        <DeleteOutlineIcon sx={{ fontSize: 25 }} onClick={() => handleTagRemove(tag.name)} />
                    </div>
                )
            })}
        </div>
    );
}

export default Tags;