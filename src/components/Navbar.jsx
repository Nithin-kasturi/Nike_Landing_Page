import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Navbar = () => {
  const handleClick=(e)=>{
    let name=e.currentTarget.name;
    let list=document.querySelector('ul');
    if(name=='menu'){
      e.currentTarget.name='close';
      list.classList.add('top-[80px]');
      list.classList.add('opacity-100');
    }
    else{
      e.currentTarget.name='menu';
      list.classList.remove('top-[80px]');
      list.classList.remove('opacity-100')
    }
  }
  return (
    <header>
      <nav className='p-5 shadow md:flex md:justify-between md:items-center'>
        <div className='flex justify-between items-center'>
            <img src={headerLogo} className='cursor-pointer'/>
            <span>
              <img name='menu' className='md:hidden block' src={hamburger} height={35} width={35} onClick={e=>handleClick(e)}/>
            </span>
        </div>
        <ul className='md:flex md:items-center bg-white z-10 md:z-auto md:static absolute w-full left-0 md:w-auto md:y-0  md:pl-0 pl-7 md:opacity-100 opacity-0 
        top-[-400px] transition-all ease-in duration-500'>
          {navLinks.map((item,i)=>(
            <a className='hover:text-black text-gray-500' key={i} href={item.href}>
              <li className='mx-5 my-6 md:my-0'>{item.label}</li>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar