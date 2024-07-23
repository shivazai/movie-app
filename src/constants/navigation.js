import {PiTelevisionFill} from "react-icons/pi";
import {BiSolidMoviePlay} from "react-icons/bi";
import {MdHomeFilled} from "react-icons/md";
import {IoSearchCircleSharp} from "react-icons/io5";
import React from "react";

export const navigation = [
    {
        label: 'Сериалы',
        href: 'tv',
        icon: <PiTelevisionFill/>
    },
    {
        label: 'Фильмы',
        href: 'movie',
        icon: <BiSolidMoviePlay/>
    }
]

export const mobileNavigation = [
    {
        label: 'Домой',
        href: '/',
        icon: <MdHomeFilled/>
    },
    ...navigation,
    {
        label: 'Поиск',
        href: '/search',
        icon: <IoSearchCircleSharp/>

    }
]