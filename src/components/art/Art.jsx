import React from 'react'
import { featureLists, goodLists } from '../../constants/data'
import check from '../../../public/images/check.png';
import underimg from '../../../public/images/under-img.jpg';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Art = () => {

    const ismobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = ismobile ? "top 20%" : "top top";

        const maskedtimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start,
                end: "+=3000",
                scrub: 1.5,
                pin: true,
            }
        });

        maskedtimeline
            .to(".will-fade", {
                opacity: 0,
                stagger: 0.2,
                ease: "power1.inOut"
            })
            .to(".masked-img", {
                scale: 1.3,
                maskSize: "400%",
                maskPosition: "center",
                duration: 1,
                ease: "power1.inOut",
            })
            .to(".sip-heading", {
                opacity: 1,
                duration: 0.5,
                ease: "power1.inOut",
            })
            .to(".sip-heading", {
                opacity: 0,
                duration: 0.5,
                ease: "power1.inOut",
            })
            .to("#masked-content", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
            });

    }, [ismobile]);

    return (
        <div id='art'>
            <div className='container mx-auto h-full pt-20'>

                <h2 className='will-fade'>The Art</h2>

                <div className='content'>
                    <ul className='space-y-4 will-fade'>
                        {goodLists.map((item, id) => (
                            <li key={id} className='flex items-center gap-2'>
                                <img src={check} alt='check' />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>

                    <div className='cocktail-img'>
                        <img
                            src={underimg}
                            alt='cocktail'
                            className='abs-center masked-img size-full object-contain'
                        />
                    </div>

                    <ul className='space-y-4 will-fade'>
                        {featureLists.map((item, id) => (
                            <li key={id} className='flex items-center justify-start gap-2'>
                                <img src={check} alt='check' />
                                <p className='md:w-fit w-60'>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='masked-container'>
                    <h2 className='will-fade'>Sip-Worthy Perfection</h2>

                    <div id='masked-content'>
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Art;