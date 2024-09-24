import React, { useState } from 'react';
import { countries, movieGenres, movies, navItem } from '../utils/datas';
import Cards from './Cards';
import MenuBar from './MenuBar';
import Search from './Search';
import ListItem from './ListItem';
import { NavLink } from 'react-router-dom';
import navIcon from "../assets/9ce7510639c4204bfe43904fad8f361f.png";
export default function NavBar() {
    const [active, setActive] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className='bg-black w-full flex items-center justify-between relative z-20'>
                <div className="flex items-center">
                    <div className="lg:hidden md:block" onClick={() => setMenu(!menu)}>
                        <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h14M5 12h14M5 7h8" />
                        </svg>
                    </div>
                    <div className='bg-[#323744] p-4 w-fit'>
                        <NavLink to="/" className={({ isActive, isPending }) => 
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
                            <img className='lg:w-28 md:w-28 sm:w-24 w-24 h-full' src={navIcon} alt="Logo" />
                        </NavLink>
                    </div>
                    <div className="lg:ml-10">
                        <div className="top-menu-nav lg:flex lg:gap-12 md:hidden hidden">
                            {
                                navItem.map(it => (
                                    <NavLink to={it.path} key={it.label} className={`text-white flex items-center ${it.icon ? 'group' : ''} `}>
                                        {it.label}
                                        {it.icon === true && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                            </svg>
                                            <div className="dropdown absolute top-12 hidden group-hover:block">
                                                <ListItem data={it.key == 'genre' ? movieGenres : countries} />
                                            </div>
                                            </>
                                        )}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mr-8">
                    <div className="flex gap-10">
                        <a href="#" className='text-white flex items-center' onClick={() => setActive(!active)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1664 1664">
                                <path fill="currentColor" d="M1152 704q0-185-131.5-316.5T704 256T387.5 387.5T256 704t131.5 316.5T704 1152t316.5-131.5T1152 704m512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124q-143 0-273.5-55.5t-225-150t-150-225T0 704t55.5-273.5t150-225t225-150T704 0t273.5 55.5t225 150t150 225T1408 704q0 220-124 399l343 343q37 37 37 90" />
                            </svg>
                            <button className='ml-2 lg:block md:hidden hidden' type='button'>Search</button>
                        </a>
                        <a href="#" className='text-white flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M6 30h20v-5a7.01 7.01 0 0 0-7-7h-6a7.01 7.01 0 0 0-7 7zM9 9a7 7 0 1 0 7-7a7 7 0 0 0-7 7" />
                            </svg>
                            <button className='ml-2 lg:block md:hidden hidden'>Login</button>
                        </a>
                    </div>
                </div>
                {active && <Search />}
            </div>
            {menu && <MenuBar />}
            <div>
                <Cards item={movies} />
            </div>
        </>
    );
}
