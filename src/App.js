import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setBannerData, setImageURL} from "./store/movieoSlice";

const App = () => {

    const dispatch = useDispatch()

    const fetchTrendingData = async () => {
        try {
            const responce = await axios.get('/trending/all/week')
            dispatch(setBannerData(responce.data.results))
        }catch (error) {
            console.log('error', error);
        }
    }

    const fetchConfiguration = async () => {
        try {
            const responce = await axios.get('/configuration')
            dispatch(setImageURL(responce.data.images.secure_base_url+'original'))
            console.log(responce)
        }catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        fetchTrendingData();
        fetchConfiguration()
    }, [])

    return (
        <main className={'pb-14 lg:pb-0'}>
            <Header/>
            <div className=''>
                <Outlet/>
            </div>
            <Footer/>
            <MobileNavigation/>
        </main>
    );
};

export default App;