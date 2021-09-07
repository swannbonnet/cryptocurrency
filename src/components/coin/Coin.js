import React from 'react'
import './Coin.css'

export default function Coin({image, name, symbol, price, value, percentage}) {
    return (
        
        <div className="coin">
                <p className='title_coin'>
                    <img src={image} className='image_coin' alt="Crypto" />
                    {name}
                </p>
                <p className='data_coin'>{symbol}</p>
                <p className='data_coin'>{price.toLocaleString()} $</p>
                <p className='data_coin'>{value.toLocaleString()} $</p>
                {percentage > 0? (<p className='percentage_green' > +{percentage.toFixed(2)}%</p>): (<p className='percentage_red'>{percentage.toFixed(2)}%</p>)}
        </div>
    )
}
