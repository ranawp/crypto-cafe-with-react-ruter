import React, { useEffect, useState } from 'react';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div>
            <p>Coins length {coins.length}</p>
            {
                coins.map(coin => <p>{coin.name}</p>)
            }

        </div>
    );
};

export default Coins;