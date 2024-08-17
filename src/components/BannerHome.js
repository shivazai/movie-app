import React from 'react';
import {useSelector} from "react-redux";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieoData.bannerData)
    const imageURl = useSelector(state => state.movieoData.imageURL)
    return (
        <section className='w-full h-full'>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {
                    bannerData.map((data, index) => {
                        console.log(data)
                        return(
                            <div className='min-w-full min-h-[450px] lg: min-h-full overflow-hidden relative group'>
                                <div className='w-full h-full'>
                                    <img src={imageURl + data.backdrop_path} alt="" className='h-full w-full object-cover'/>
                                </div>

                                <div className='absolute top-0 h w-full h h-full hidden flex items-center justify-between px-4 group-hover:flex'>
                                    <button className=' bg-white p-1 rounded text-2xl z-10 text-black'>
                                        <FaAngleLeft/>
                                    </button>
                                    <button className=' bg-white p-1 rounded text-2xl z-10 text-black'>
                                        <FaAngleRight/>
                                    </button>
                                </div>

                                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>

                                </div>
                                <div className='container mx-auto px-10'>
                                    <div className='w-full absolute bottom-0 max-w-md px-3'>
                                        <h2 className={'font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'}>{data?.title || data?.name} </h2>
                                        <p className={'text-ellipsis line-clamp-3 my-2'}>{data.overview}</p>
                                        <div className={'flex items-center gap-4'}>
                                            <p>Рейтинг: {Number(data.vote_average).toFixed(1)}+</p>
                                            <span> | </span>
                                            <p>Просмотры: {Number(data.popularity).toFixed(3)}</p>
                                        </div>
                                        <button className={'bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all  hover:scale-105'}>
                                            Посмотреть
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default BannerHome;