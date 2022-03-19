import './App.css';
import React from 'react';
import AlertTopBar from 'components/AlertTopBar';
import Navbar from 'components/Navbar';
import BannerSlider from 'components/BannerSlider';
import ShopNewArrivals from 'components/ShopNewArrivals';
import Gallery from 'components/Gallery';
import NewArrivals from 'components/NewArrivals';
import FavoriteTees from 'components/FavoriteTees';
import Footer from 'components/Footer';

function App() {
    return (
        <div className='App'>
            <AlertTopBar />
            <Navbar />
            <div className='test'>
                <BannerSlider />
                <ShopNewArrivals />
            </div>
            <Gallery />
            <NewArrivals />
            <FavoriteTees />
            <Footer />
        </div>
    );
}

export default App;
