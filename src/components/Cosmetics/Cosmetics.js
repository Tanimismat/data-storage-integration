import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../utilities/calculation';
// import add from '../../utilities/calculation';

const Cosmetics = () => {
    // const cosmetics = [
    //     { id: 1, name: 'Alta', price: 100 },
    //     { id: 2, name: 'Nailpolish', price: 150 },
    //     { id: 3, name: 'Lipstick', price: 300 }
    // ]

    // const first = 55;
    // const second = 66;
    // const total = add(first, second);

    /* const cosmetics = [
        {
            "id": "623b4ec9ccc4f6956680a150",
            "price": 332,
            "name": "Peters Brady"
        },
        {
            "id": "623b4ec979fb05ff2cfe11a6",
            "price": 404,
            "name": "Mcneil Wilkinson"
        },
        {
            "id": "623b4ec9428423e9b1760762",
            "price": 505,
            "name": "Dolly Benton"
        },
        {
            "id": "623b4ec9832334ef7621e293",
            "price": 586,
            "name": "Watson Webb"
        },
        {
            "id": "623b4ec9d27f5617a606183a",
            "price": 166,
            "name": "Elisabeth Davis"
        },
        {
            "id": "623b4ec954675587dc56287a",
            "price": 584,
            "name": "Kerry Cantrell"
        },
        {
            "id": "623b4ec9535677059eb9fdc9",
            "price": 29,
            "name": "Alisa Moses"
        }
    ] */

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            <h2>Welcome to my cosmetics store</h2>
            {/* <p>Total: {total}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;