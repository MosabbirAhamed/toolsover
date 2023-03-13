import Link from 'next/link';
import React from 'react'
import { FcGoogle } from 'react-icons/fc';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-300">
      <div className="container ">

        <div className="flex items-center justify-between py-4">

          <div>
            <h1 className="text-4xl text-main">
              <Link href="/">
                TollsOver
              </Link>
            </h1>
          </div>
          <div>
            <ul className="flex transition-all items-center gap-10 ">
              <li className="text-gray text-[15px] hover:text-main font-semibold  cursor-pointer">
                <Link href="/favourites">
                  Favourites
                </Link>
              </li>
              <li className="text-gray text-[15px] hover:text-main font-semibold cursor-pointer"> Discover </li>
              <li className="text-gray text-[15px] hover:text-main font-semibold cursor-pointer"> Submit </li>
              <li className="text-gray text-[15px] hover:text-main font-semibold cursor-pointer"> Community </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span> <FcGoogle className='text-xl' /> </span>
            <p className="text-gray hover:text-main ">Login</p>
          </div>
        </div>


      </div>
    </header>
  )
}

export default Header