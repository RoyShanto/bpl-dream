import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import MainSection from './components/main/MainSection';
import Footer from './components/footer/Footer';

function App() {

  const [coins, setCoins] = useState(0);
  const handleAddCoin = (newCoins) => {
    const UpdateCoins = coins + newCoins;
    setCoins(UpdateCoins);
  }
  const handleRemoveCoin = (newCoins) => {
    const UpdateCoins = coins - newCoins;
    setCoins(UpdateCoins);
  }

  return (
    <>
      <div className='lg:mx-32 md:mt-12'>
        <Header coins={coins}/>
        <Banner handleAddCoin={handleAddCoin} />
        <MainSection coins={coins} handleRemoveCoin={handleRemoveCoin}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
