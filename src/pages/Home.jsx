import { default as React, useEffect, useState } from 'react';
import Cards from '../Components/Cards';
import { movies } from '../utils/datas';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import Search from '../Components/Search';

function Home() {
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(0)
    const [url,setUrl] = useState("https://imdb-top-100-movies.p.rapidapi.com")
    const [data,setData] = useState([])

    useEffect(() => {
        fetch(url,{
        headers:{
            'x-rapidapi-key':'60f98536aemshc3bda099eaf08e5p11ccb4jsn884af28e73b7'
        }
        })
        .then(response => response.json())
        .then(dt => setData(dt))
        .catch(error => console.error('Error fetching data:', error));
        console.log({data});
        
    }, [url]);
  return (
    <>
      <div className="flex lg:h-[630px] bg-[#282c37] ">
        <div className="bgsomecolor p-4 lg:w-[35%] lg:h-[600px] drop-shadow-2xl lg:flex items-center justify-center md:hidden hidden">
          <div className="">
            <h1 className='text-white text-[34px] font-semibold'>Over <span className='text-[#f04f24]'>66,000</span> Movies and TV Show <br /> Episodes available and still updating. <br /> Enjoy your Free HD Streaming Now!</h1>
            <div className="flex mt-5"  onClick={() => setActive(!active)}>
              <input type="text" placeholder='Enter Keyword... ' className='p-3 w-full focus:outline-none'/>
              <button className='bg-[#f04f24] border-0 px-8 py-3'><svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34M208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128"/></svg></button>
            </div>
            <div className="flex items-center mt-10">
              <span>✨‍</span>
              <p className='text-white ml-2'>Help GOKU to viral</p>
            </div>
            <div className='flex gap-3 items-center mt-8'>
              <small className='text-slate-600'>Shares</small>
              <div className='bg-[#4267B2] grow h-8 w-32 flex   hover:-mt-2 transition-all items-center justify-center'>
                  <svg className='text-white'  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.96.96 0 0 1-.975.974h-1.937a.96.96 0 0 1-.963-.974"/>
                  </svg>
              </div>
              <div className='bg-black grow h-8  w-12 flex  hover:-mt-2 transition-all  items-center justify-center'>
                  <svg className='text-white' xmlns="http://www.w3.org/2000/svg"  width="15" height="15" viewBox="0 0 16 16">
                      <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/>
                  </svg>
              </div>
              <div className='bg-[#25d366] grow h-8  w-12   hover:-mt-2 transition-all flex items-center justify-center'>
                  <svg  className='text-white' xmlns="http://www.w3.org/2000/svg"  width="15" height="15" viewBox="0 0 16 16">
                      <path fill="currentColor" d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1s-.48.6-.59.73s-.21.14-.4 0a5.1 5.1 0 0 1-1.49-.92a5.3 5.3 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.4 1.4 0 0 0 .18-.31a.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23a2.1 2.1 0 0 0-.65 1.55A3.6 3.6 0 0 0 5 8.2A8.3 8.3 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.5 2.5 0 0 0 1.17.07a1.93 1.93 0 0 0 1.26-.88a1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21"/><path fill="currentColor" d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85l3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72M8 14.12a6.1 6.1 0 0 1-3.15-.87l-.22-.13l-2.34.61l.62-2.28l-.14-.23a6.18 6.18 0 0 1 9.6-7.65a6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12"/>
                  </svg>
              </div>
              <div className='bg-[#448AFF] grow h-8   w-12   hover:-mt-2 transition-all flex items-center justify-center'>
                  <svg className='text-white' xmlns="http://www.w3.org/2000/svg"  width="15" height="15" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="m12.942 14.413l-2.56-2.66L5.45 14.48l5.406-5.736l2.56 2.66l4.93-2.727zM11.899 2C6.432 2 2 6.144 2 11.257c0 2.908 1.434 5.503 3.678 7.2V22l3.378-1.874c.9.252 1.855.388 2.843.388c5.468 0 9.9-4.145 9.9-9.257c0-5.113-4.432-9.257-9.9-9.257"/>
                  </svg>
              </div>
              <div className='bg-[#f04f24] grow h-8 w-12  hover:-mt-2 transition-all flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" viewBox="0 0 256 256">
                      <circle cx="128" cy="128" r="128" fill="#ff4500"/>
                      <path fill="#fff" d="M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981l27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667c7.324 0 13.275-5.95 13.275-13.278c0-7.324-5.95-13.275-13.275-13.275c-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458c-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617c0 7.629 4.577 14.037 10.988 16.939a33.6 33.6 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036c41.202 0 74.621-23.35 74.621-52.036a35.8 35.8 0 0 0-.458-5.646c7.41-2.902 10.988-9.31 10.988-16.939z"/>
                  </svg>
              </div>
              <div className='bg-[#0088cc] hover:-mt-2 transition-all hover:bg-[#327494] grow h-8 w-12 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg"   width="15" height="15" viewBox="0 0 14 14"><path fill="white" fill-rule="evenodd" d="M.25 7a6.75 6.75 0 1 1 13.5 0A6.75 6.75 0 0 1 .25 7m9.002 4.064l1.045-7.932l-8.165 3.935l2.417.876l2.686-2.076a.5.5 0 1 1 .611.792L5.618 8.38v2.726l1.685-1.604z" clip-rule="evenodd"/></svg>
              </div>
          </div>
          </div>
        </div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            effect="fade"
            speed={2500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation,EffectFade ]}
            className="mySwiper lg:h-[600px] lg:w-[65%]"
          >
            <SwiperSlide><img className='w-full' src="../assets/slider-img-1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-4.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-5.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-6.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-7.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-8.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-9.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="../assets/slider-img-10.jpg" alt="" /></SwiperSlide>
        </Swiper>

        </div>
        {active && <Search />}
        <Cards data={movies} />

          {data.length > 0 &&
          data.map((it, i) => {
              <div key={i}>
                  {it.title}
                  <img src={it.image} alt="" />
              </div>
          })
        }
    </>
  )
}

export default Home
