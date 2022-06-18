import React from 'react';
import './Tags.scss';

function Tags() {
    return (
        <div className='Tags'>
            <h5>Availabe Tags</h5>
            <div className='tagInfo'>
                <p>tag1</p>
                <button>remove</button>
            </div>
            <div className='tagInfo'>
                <p>tag2</p>
                <button>remove</button>
            </div>
            <div className='tagInfo'>
                <p>tag3</p>
                <button>remove</button>
            </div>
        </div>
    );
}

export default Tags;