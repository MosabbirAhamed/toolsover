import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className="container border-t border-slate-400 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 transition-all">
                        <p className="text-sm text-gray">
                            <Link href="/">

                                <span className="hover:border-b border-slate-500"> Privacy Policy</span>
                            </Link>
                        </p>
                        <p className="text-sm text-gray">
                            <Link href="/">

                                <span className="hover:border-b border-slate-500">Terms of Services</span>
                            </Link>
                        </p>

                    </div>
                    <div className="flex flex-col gap-4 transition-all">
                        <p className="text-sm text-gray">
                            <Link href="/">

                                <span className="hover:border-b border-slate-500">Copyright © 2023 - Tawba-IT LTD™</span>
                            </Link>
                        </p>
                        <p className="text-sm text-gray ">
                            <Link href="/">
                                <span className="hover:border-b border-slate-500"> Sponsor Us</span>
                            </Link>
                        </p>

                    </div>
                    <div className="flex gap-4">
                        <Link href="/"><FaFacebookF className='text-main  text-2xl' /></Link>
                        <Link href="/"><AiFillYoutube className='text-[#e7160e]  text-2xl' /></Link>
                        <Link href="/"><BsLinkedin className='text-[#0072b1] text-2xl ' /></Link>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer