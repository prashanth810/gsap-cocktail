import React from 'react';
import abg1 from '../../../public/images/abt1.png';
import abg2 from '../../../public/images/abt2.png';
import abg3 from '../../../public/images/abt3.png';
import abg4 from '../../../public/images/abt4.png';
import abg5 from '../../../public/images/abt5.png';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

function About() {

    useGSAP(() => {
        const titlesplit = SplitText.create("#about h2", {
            type: "words",
        })

        const scrolltimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        })

        scrolltimeline.from(titlesplit.words, {
            opacity: 0,
            duration: 1, yPercent: 100,
            ease: "expo.out",
            stagger: 0.02,
        })
            .from(".top-grid div, .bottom-grid div", {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                stagger: 0.04,
            }, "-=0.5")



    }, []);

    return (
        <div id='about'>
            <div className='mb-16 md:px-0 px-5'>
                <div className="content">
                    {/* col-span-8 as per CSS grid-cols-12 */}
                    <div className="md:col-span-8">
                        <p className='badge'>Best Cocktails</p>
                        <h2>
                            Where every detail matters{' '}
                            <span className='text-white'>-</span>{' '}
                            from muddle to garnish
                        </h2>
                    </div>

                    {/* Fixed typo: sub-vontent → sub-content */}
                    <div className='sub-content'>
                        <p>
                            Every cocktail we serve is a reflection of our obsession with
                            detail — from the first muddle to the final garnish. That care
                            is what turns a simple drink into something truly memorable.
                        </p>

                        <div>
                            <p className='md:text-3xl text-xl font-bold'>
                                <span>4.5 / 5</span>
                            </p>
                            <p className='text-sm text-white-100'>
                                More than +1200 customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top grid: 3 + 6 + 3 = 12 columns */}
            <div className='top-grid'>
                <div className='xl:col-span-3'>
                    <div className='noisy'>
                        <img src={abg1} alt='grid-img' />
                    </div>
                </div>

                <div className='xl:col-span-6'>
                    <div className='noisy'>
                        <img src={abg2} alt='grid-img' />
                    </div>
                </div>

                <div className='xl:col-span-3'>
                    <div className='noisy'>
                        <img src={abg5} alt='grid-img' />
                    </div>
                </div>
            </div>

            {/* Bottom grid: 8 + 4 = 12 columns */}
            <div className='bottom-grid'>
                <div className='md:col-span-8'>
                    <div className='noisy'>
                        <img src={abg3} alt='grid-img' />
                    </div>
                </div>

                <div className='md:col-span-4'>
                    <div className='noisy'>
                        <img src={abg4} alt='grid-img' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;