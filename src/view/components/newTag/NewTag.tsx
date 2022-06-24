import axios from 'axios';
import React, { useState } from 'react';
import './NewTag.scss';

//choose random color for each new tag --> Math.random().toString(16).substr(-6)

function NewTag() {

    //input -> a state retains the text written by the user
    const [input, setInput] = useState("");

    //Add a new tag to the TAGS table by POST
    async function addTag() {
        const isAvailable = checkAvailableTag();
        if (await isAvailable) {
            try {
                axios.post('http://localhost:4000/tags', { "name": input, "color": Math.random().toString(16).substr(-6), "photos": [] });
                setInput("");
            } catch (error) {
                console.log(error);
            }
        }
    }

    //check if the tag available in the TAGS table, before to add the new tag
    async function checkAvailableTag() {
        try {
            const response = await axios.get('http://localhost:4000/tags');
            const tags = response.data;
            const isAvailable = tags.filter((tag: any) => {
                if (tag.Name === input) {
                    return true;
                }
            })
            if (isAvailable) {
                return true;
            }
            else return false;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='NewTag'>
            <input type="text" name="new" placeholder="New Tag..." value={input} onInput={(ev: any) => setInput(ev.target.value)} />
            <button onClick={addTag}>Save</button>
        </div>
    );
}

export default NewTag;
