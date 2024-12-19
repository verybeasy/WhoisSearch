'use client'

import { useState } from 'react';
import { IoMdSearch, IoMdClose } from 'react-icons/io';


export default function SearchBar(props) {
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('Enter pressed! Input:', query);
    }
  };

  return (
    <div 
      className={`
        bg-slate-900 duration-300 ease-in-out rounded-3xl text-slate-200 border border-slate-700 flex flex-row p-1 w-auto box-shadow
        ${props.className} 
        ${ !focus ? 'hover:bg-slate-700' : '' }`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <IoMdSearch className="pr-2 ml-2 bg-transparent" size={30}/>
      
      <input
        className="bg-transparent focus:outline-none w-full placeholder-slate-400"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);

          console.log('change');
          if (e.target.value.length > 2) {
            console.log('search');
            props.onSearch(e.target.value);
          }
        }}
        onKeyDown={handleEnterPress}
      />
      
      <button 
        className={`
          pl-1
          mr-1
          border-l
          border-slate-500
          ${ query ? 'visible' : 'invisible'}
        `}
        onClick={() => {
          setQuery('');
          props.onClear();
        }}
      >
        <IoMdClose size={25} className='bg-transparent rounded-md hover:bg-slate-600'/>
      </button>
    </div>
  );
}