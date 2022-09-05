import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardsGroup2 = () => {
    const products = [
        {id: 1, name: 'Dell-laptop' ,price: 50000},
        {id: 2, name: 'Hp-laptop' ,price: 55000},
        {id: 3, name: 'Lenevo-laptop' ,price: 60000}
    ]
    return (
        <div>
            <CardGroup>
            {
                products.map(product => <Card2 
                    key={product.id}
                    product ={product}
                    ></Card2>)
            }
            </CardGroup>
        </div>
    );
};

export default CardsGroup2;