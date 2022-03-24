import React from 'react';

const Cosmetic = ({ cosmetic }) => {
    return (
        <div>
            <h2>Buy this: {cosmetic.name}</h2>
            <p>Only for: ${cosmetic.price}</p>
            <p><small>ID: {cosmetic.id}</small></p>
        </div>
    );
};

export default Cosmetic;