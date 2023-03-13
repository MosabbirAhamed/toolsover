import Link from 'next/link';
import React from 'react'
import { FcGoogle } from 'react-icons/fc';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container ">

        <div className="flex items-center justify-between py-3">
          <div>
            <ul className="flex transition-all items-center gap-10 ">
              <li className="">
                <Link href="/">

                  <img className=" w-[200px] h-[70px]" src="https://www.futurepedia.io/_next/static/media/futurepedia.85a9d4b9.svg" alt="" />

                </Link>
              </li>
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