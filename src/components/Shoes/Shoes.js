import React from 'react';
import { add, multiply } from '../../utilities/calculation';

const Shoes = () => {
    const first = 10;
    const second = 66;
    const result = multiply(first, second);
    const sum = add(first, second)

    return (
        <div>
            <h3>Shoes component</h3>
            <p>Result: {result} and Sum: {sum}</p>
        </div>
    );
};

export default Shoes;
