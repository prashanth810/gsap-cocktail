import React from 'react';
import footerrightimg from '../../../public/images/footer-right-leaf.png';
import footerleftimg from '../../../public/images/footer-left-leaf.png';
import { openingHours, socials } from '../../constants/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Contact = () => {

    useGSAP(() => {
        const titlesplit = SplitText.create("#contact h2", { type: "words" });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            ease: "power1.inOut",
        })

        timeline.from(titlesplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.2,
        })
            .from("#contact h3, #contact p, #contact a", {
                opacity: 0,
                yPercent: 100,
                stagger: 0.2,
            })

            .to("#f-right-leaf", {
                y: -50,
                duration: 1,
                ease: "power1.inOut",
            })
            .to("#f-left-leaf", {
                y: -50,
                duration: 1,
                ease: "power1.inOut",
            })
    }, []);


    return (
        <footer id='contact'>
            <img src={footerrightimg} alt='leaf-right' id='f-right-leaf' />
            <img src={footerleftimg} alt='leaf-right' id='f-left-leaf' />

            <div className='content'>
                <h2> Where to Find Us  </h2>
                <div>
                    <h3> Visit Our Store </h3>
                    <p> 123 Cocktail Street, New York, NY 10001 </p>
                </div>

                <div>
                    <h3> Contact Us </h3>
                    <p> Phone: (123) 456-7890 </p>
                    <p> Email: prashanth </p>
                </div>

                <div>
                    {openingHours.map((item, id) => {
                        return (
                            <p key={item.day}>
                                {item.day}: {item.time}
                            </p>
                        )
                    })}
                </div>

                <div>
                    <h3> Socials </h3>
                    <div className='flex-center gap-5'>
                        {socials.map((item, id) => {
                            return (
                                <a key={item.id} href
                                    ={item.url} target="_blank" rel="noopener noreferrer"
                                    aria-label={item.name}>
                                    <img src={item.icon} alt={item.name} className='w-6 h-6' />
                                </a>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
