import React from 'react';
import './NewTag.scss';

function NewTag() {
    return (
        <div className='NewTag'>
            <input type="text" name="new" placeholder='New Tag...'/>
            <button>Save</button>
        </div>
    );
}

export default NewTag;