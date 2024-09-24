import React from 'react'

export default function ListItem({data}) {
  return (
    <>
    <div className='bg-black h-fit lg:w-[400px] p-5'>  
        <ul className='grid grid-cols-3 gap-5'>
          {
            data.map(it => (
              <li key={it.key}><a href="#"  className='text-white hover:text-[#f04f24]'  title={it.title}>{it.label}</a></li>
            ))
          }
        </ul>
    </div>
    </>
  )
}