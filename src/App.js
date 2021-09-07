import React, {useState, useEffect} from 'react';
import './App.css';

import Coin from './components/coin/Coin';

import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  //API coingecko
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  //search coin
  const handleChange = e => {
      setSearch(e.target.value)
  }

  //filter search
  const filteredCoins = coins.filter( coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  
  return (
    <div>

      <div className='navbar'>
        <h1>Cryptocurrency</h1>
        <form className='search_container'>
          <input
              className='search'
              type='text'
              onChange={handleChange}
          />
          <SearchIcon className='icon_search'/>
        </form>
        
      </div>

      <div className="coin_container">

        <div className="coin">
          <p className='title_table'>Coin</p>
          <p className='title_table'>Ticker</p>
          <p className='title_table'>Price</p>
          <p className='title_table'>Market capitalization</p>
          <p className='percent_table'>Change 24h</p>
        </div>

        {
          filteredCoins.map(coin => {
            return(
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  value={coin.market_cap}
                  percentage={coin.price_change_percentage_24h}/>
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
