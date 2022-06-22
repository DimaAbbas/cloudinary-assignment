import axios from 'axios';
import React, { useState } from 'react';
import './NewTag.scss';
//choose random color for each new tag --> Math.random().toString(16).substr(-6)

function NewTag() {

    const [input, setInput] = useState("");

    const addTag = () => {
        try {
            const response = axios.post('http://localhost:4000/tags', {"name" : input, "color": Math.random().toString(16).substr(-6), "photos": []});
            setInput("");
            // }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='NewTag'>
            <input type="text" name="new" placeholder="New Tag..." value={input} onInput={(ev:any) => setInput(ev.target.value)}/>
            <button onClick={addTag}>Save</button>
        </div>
    );
}

export default NewTag;

