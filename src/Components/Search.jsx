import React, { useState } from 'react';
import { movies } from '../utils/datas';

export default function Search() {
  function closeBtn() {
    const popup = document.getElementById("popUp");
    popup.style.display = "none";
    const showCard = document.getElementById("showCard");
    showCard.style.display = "none";
  }

  const [data, setData] = useState("");
  const [filerData, setFilterData] = useState([]);

  function handleSearch(e) {
    const searchData = e.target.value.toLowerCase();
    setData(searchData);

    const result = movies.filter((item) =>
      item.movieName.toLowerCase().includes(searchData)
    );
    setFilterData(result);
  }

  return (
    <>
      <div className='bg-black h-screen w-full fixed top-0 flex justify-center opacity-85 z-[1000]' id='popUp'>
        <div className="absolute lg:right-8 lg:top-8 md:right-8 md:top-8 right-4 top-4">
          <a href="#">
            <svg onClick={closeBtn} className='text-white' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z" />
            </svg>
          </a>
        </div>
        <form action="" className='mt-14 lg:mt-24 md:mt-24 w-full max-w-4xl'>
          <div className="flex items-center">
            <svg className='text-white mr-[-20px]' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
            </svg>
            <input
              type="text"
              placeholder='Search...'
              className='bg-transparent border-b-2 border-gray-300 px-7 py-4 w-full text-white focus:outline-none'
              onChange={handleSearch}
            />
          </div>
        </form>
      </div>
      {data && (
        <div id='showCard'>
          <div className="absolute top-32 left-72 transform -translate-x-1/2 text-white text-xl mt-10 z-[2000]">
              {filerData.length > 0
                ? `${filerData.length} results found`
                : "No movies found"}
            </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 px-40 gap-4 mt-8 absolute top-48 left-0 right-0 z-[2000]">
            {filerData.map((item) => (
              <div key={item.movieName} className="w-52 bg-[#181b22] rounded-lg shadow-lg overflow-hidden opacity-100">
                <div className="relative">
                  <img
                    src={item.image}
                    className="w-full h-72 object-cover"
                    alt={item.movieName}
                  />
                </div>
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
        </div>
      )}
    </>
  );
}