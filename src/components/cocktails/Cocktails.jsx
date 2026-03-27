import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Cocktails = () => {
    useGSAP(() => {
        const parallatimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            }
        })

        parallatimeline.from("#c-left-leaf", {
            x: -100,
            y: 100,
        })
            .from("#c-right-leaf", {
                x: 100,
                y: 100,
            })
    }, []);


    return (
        <section id='cocktails' className='noisy'>

            <img
                src="/images/cocktail-left-leaf.png"
                alt="c-left-leaf"
                className="left-leaf"
            />
            <img
                src="/images/cocktail-right-leaf.png"
                alt="c-right-leaf"
                className="right-leaf"
            />

            <div className='list'>
                <div className='popular'>
                    <h2> Most Popular Cocktails :  </h2>

                    {cocktailLists.map((item, i) => {
                        return (
                            <li key={item.id}>
                                <div className='md:me-28'>
                                    <h3> {item.name}</h3>

                                    <p> {item?.country}
                                        | {item?.detail} </p>
                                </div>

                                <span> {item?.price} </span>
                            </li>
                        )
                    })}
                </div>

                <div className='loved'>
                    <h2> Most Loved Mocktails :  </h2>

                    {mockTailLists.map((item, i) => {
                        return (
                            <li key={item.id}>
                                <div className='me-28'>
                                    <h3> {item.name}</h3>

                                    <p> {item?.country}
                                        | {item?.detail} </p>
                                </div>

                                <span> {item?.price} </span>
                            </li>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Cocktails
