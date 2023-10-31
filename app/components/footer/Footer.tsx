import React from 'react'
import Link from 'next/link'
import Container from '../Container'
import FooterList from './FooterList'
import { MdFacebook } from 'react-icons/md'
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
const Footer = () => {
  return(
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
        <Container>
            <div className='flex md:flex-grow justify-center pt-16 pb-8'>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
                    <Link href="#">Nike</Link>
                    <Link href="#">Adidas</Link>
                    <Link href="#">Converse</Link>
                    <Link href="#">Vans</Link>
                    <Link href="#">Puma</Link>
                </FooterList>

                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Introduction</h3>
                    <Link href="#">About shop</Link>
                    <Link href="#">News</Link>
                    <Link href="#">Store</Link>
                    <Link href="#">Sales</Link>
                    <Link href="#">Contact Us</Link>
                </FooterList>

                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Follow Us</h3>
                    <div className='flex gap-2'>
                        <Link href="#"><MdFacebook size={24}></MdFacebook></Link>
                        <Link href="#"><AiFillTwitterCircle size={24}></AiFillTwitterCircle></Link>
                        <Link href="#"><AiFillInstagram size={24}></AiFillInstagram></Link>
                        <Link href="#"><AiFillYoutube size={24}></AiFillYoutube></Link>
                    </div>
                </FooterList>

            </div>
        </Container>



        
    </footer>
  )
}

export default Footer