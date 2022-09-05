import React from 'react';
import Card from '../Card/Card';

const CardsGroup = () => {
    const products = [
        {id: 1, name: 'Dell-laptop' ,price: 50000},
        {id: 2, name: 'Hp-laptop' ,price: 55000},
        {id: 3, name: 'Lenevo-laptop' ,price: 60000}
    ]
    return (
        <div>
            <h1>This is my cards</h1>
            <div className="card-group">
               {
                   products.map(product => <Card 
                    key={product.id}
                    product = {product}
                    ></Card>)
               }
            </div>
        </div>
    );
};

export default CardsGroup;