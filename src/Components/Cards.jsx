import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Cards({ data }) {
  return (
    <div className='bg-[#1f232c] flex justify-center relative flex-wrap gap-6'>
      {data &&
        data.map((item) => (
          <div key={item.movieName} className="w-52 bg-[#181b22] rounded-lg shadow-lg overflow-hidden">
            <Link to={`/movies/${item.key}`}>
              <div className="relative">
                <img
                  src={item.image}
                  className="w-full h-72 object-cover"
                  alt={item.movieName}
                />
                <a href="#" class="absolute w-full h-full top-0 left-0 opacity-5 bg-black z-10 transition-opacity duration-300 hover:opacity-90 flex justify-center items-center">
                  <div class="flex items-center space-x-2">
                    <svg className='bg-[#f05024] rounded-3xl' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z"/></svg>
                    <svg className='bg-white rounded-3xl' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m1.062 4.312a1 1 0 1 0-2 0v2.75h-2.75a1 1 0 0 0 0 2h2.75v2.75a1 1 0 1 0 2 0v-2.75h2.75a1 1 0 1 0 0-2h-2.75Z"/></svg>                  
                  </div>
                </a>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-[#181b22] to-transparent"></div>
              </div>
            </Link>
            <div className="p-4">
              <h3 className="text-white text-sm font-semibold mb-2">
                {item.movieName}
              </h3>
              <div className="flex justify-between items-center text-gray-400 text-sm">
                <span>{item.date}</span>
                <div className="flex items-center">
                  <span>⭐</span>
                  <span className="ml-1">{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
