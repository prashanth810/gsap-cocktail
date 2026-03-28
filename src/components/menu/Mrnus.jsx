import React, { useRef, useState } from 'react';
import leftimg from '../../../public/images/slider-left-leaf.png';
import rightimg from '../../../public/images/slider-right-leaf.png';
import { sliderLists } from '../../constants/data';
import rigtarrow from '../../../public/images/right-arrow.png';
import leftarrow from '../../../public/images/left-arrow.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Mrnus = () => {
    const [currentind, setCurrentind] = useState(0);
    const contentref = useRef();

    const totalcocktails = sliderLists.length;

    const handleselect = (id) => {
        const newindex = (id + totalcocktails) % totalcocktails;
        setCurrentind(newindex);
    }

    // Fixed: sliderLists[...] instead of sliderLists(...)
    const getcocktail = (id) => {
        return sliderLists[(currentind + id + totalcocktails) % totalcocktails];
    }

    const current = getcocktail(0);
    const previouscock = getcocktail(-1);
    const nextcock = getcocktail(1);


    useGSAP(() => {
        gsap.fromTo("#title", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
        })

        gsap.fromTo(".cocktail", {
            opacity: 0,
            xPercent: -100,
        }, {
            opacity: 1,
            xPercent: 0,
            duration: 1,
            ease: "power1.inOut",
        })
        gsap.fromTo(".details h2", {
            opacity: 0,
            yPercent: 100,
        }, {
            opacity: 1,
            yPercent: 0,
            ease: "power1.inOut"
        })
        gsap.fromTo(".details p", {
            opacity: 0,
            yPercent: 100,
        }, {
            opacity: 1,
            yPercent: 0,
            ease: "power1.inOut"
        })

        gsap.fromTo("#m-left-leaf", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        })
        gsap.fromTo("#m-right-leaf", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        })

    }, [currentind]);

    return (
        <section id='menu' aria-labelledby='menu-heading'>

            <img src={leftimg} alt='left-left' id="m-left-leaf" />
            <img src={rightimg} alt='right-lraf' id='m-right-leaf' />

            <h2 id='menu-heading' className='sr-only'> Cocktail Menu </h2>

            <nav className="cocktail-tabs" aria-label='Cocktail Navigation'>
                {sliderLists.map((item, id) => {
                    const isactive = id === currentind;
                    return (
                        <button key={item.id} className={`${isactive ? "text-white border-white" : "text-white/50 border-white/50"}`} onClick={() => handleselect(id)}>
                            {item.name}
                        </button>
                    )
                })}
            </nav>

            <div className='content'>
                <div className='arrows'>

                    <button className='text-right' onClick={() => handleselect(currentind + 1)}>
                        <span>{nextcock.name}</span>
                        <img src={rigtarrow} alt='right arrow' aria-hidden={true} />
                    </button>

                    <button className='text-left' onClick={() => handleselect(currentind - 1)}>
                        <span>{previouscock.name}</span>
                        <img src={leftarrow} alt='left arrow' aria-hidden={true} />
                    </button>

                </div>

                <div className='cocktail'>
                    <img src={current.image} alt={current.name} className='object-contain' />
                </div>

                <div className='recipe'>
                    <div ref={contentref} className='info'>
                        <p> Recipe for :  </p>
                        <p id='title'> {current.name} </p>
                    </div>

                    <div className='details'>
                        <h2> {current.title} </h2>
                        <p> {current.description} </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mrnus;