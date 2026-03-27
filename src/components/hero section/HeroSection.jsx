import React from 'react';
import leftleaf from '../../../public/images/hero-left-leaf.png';
import rightleaf from '../../../public/images/hero-right-leaf.png';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const HeroSection = () => {

    useGSAP(() => {
        const herosplit = new SplitText(".title", {
            type: "chars, words"
        });

        const paragraph = new SplitText(".subtitle", {
            type: "lines"
        });

        herosplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(herosplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out", // givees smooth spring scroling
            stagger: 0.06,
        });

        gsap.from(paragraph.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,
            ease: "expo.out",
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })

            .to(".right-leaf", { y: 200 }, 0)
            .to(".left-leaf", { y: -200 }, 0)
    }, []);



    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'> COCKTAIL </h1>

                <img src={leftleaf} alt='left-leaf' className='left-leaf' />
                <img src={rightleaf} alt='right-leaf' className='right-leaf' />

                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block xl:block'>
                            <p> Cool. Crisp. Classic.  </p>
                            <p className='subtitle'> Sip the Spirit od Summer  </p>
                        </div>

                        <div className='view-cocktails'>
                            <p className='subtitle'> Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses </p>

                            <a href='#cocktails'>
                                View Cocktails
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HeroSection
