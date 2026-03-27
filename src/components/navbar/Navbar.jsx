import React from 'react'
import { navLinks } from '../../constants/data';
import logo from '../../../public/images/logo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
            }
        });

        navTween.fromTo("nav", {
            backgroundColor: "transparent",
        },
            {
                backgroundColor: "#00000050",
                bckgroundFilter: "blur(10px)",
                duration: 1,
                ease: "powet1.inOut",
            })
    }, [])
    return (
        <nav>
            <div>
                <a href='#home' className='flex items-center gap-2'>
                    <img src={logo} alt='logo' className='' />
                    <p>  Cocktail </p>
                </a>

                <ul>
                    {navLinks.map((item, id) => {
                        return (
                            <li key={item.id || id} >
                                <a href={`#item.id`} > {item?.title} </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
