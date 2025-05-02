
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroSection from '../assets/images/Landing-Page/HeroSection.webp'
import UpdatePost from '../assets/images/Landing-Page/UpdatePost.png'
import RealTimeChat from '../assets/images/Landing-Page/RealTime Chat.png'
import FriendRequest from '../assets/images/Landing-Page/bFriend Reequest.webp'
import { Hero } from './LandingPage Components/Hero'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { StepToUse } from './LandingPage Components/StepToUse/StepToUse'
// import { motion } from 'motion/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


export const LandingPage = () => {
    const featuresRef = useRef(null);
    const isFeaturesInView = useInView(featuresRef, {
        once: true,
    });



    const refWriting2 = useRef(null);
    const isWriting2InView = useInView(refWriting2, { once: true, margin: "-100px" });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });

    const writingPart1 = (

        <div className="space-y-5 w-1/2 text-center ">

            <motion.p
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 15,
                    transition: {
                        duration: 0.8,
                        delay: 0.6
                    }
                }}
                viewport={{
                    once: true,
                }}

                className="font-semibold md:text-5xl">Connect, Share, and Chat <br />Welcome to  <span className='text-orange-500'>M</span>eetup🔥</motion.p>
            <motion.p
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1.29,
                    x: 15,
                    transition: {
                        duration: 0.8,
                        delay: 0.9
                    }
                }}
                viewport={{
                    once: true,
                }}
                className="text-lg">Your hub for real-time conversations and photo sharing</motion.p>
            <div>
                <motion.button
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1.29,
                        x: 15,

                        transition: {
                            duration: 0.8,
                            delay: 1.2
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="btn btn-outline hover:bg-purple-950 hover:text-gray-300 border-1 border-purple-950">Join Now</motion.button>
            </div>
        </div>
    )

    const ImagePart1 = (
        <div className='md:w-1/2 '>

            <motion.img src={HeroSection}
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: -15,
                    transition: {
                        duration: 1.3,
                        delay: 0.7
                    }
                }}
                viewport={{
                    once: true,
                }}
                className='md:h-[450px]' alt="" />
        </div>
    )

    const WritingPar2 = (
        <div className="space-y-5 w-1/2 text-center ">

            <motion.p
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: -15,
                    transition: {
                        duration: 0.8,
                        delay: 0.6
                    }
                }}
                viewport={{
                    once: true,
                }}
                className="font-semibold md:text-4xl text-left">Speak your mind, share your world</motion.p>

            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg'
                    className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        // scale: 0.7,
                        x: -15,
                        transition: {
                            duration: 0.8,
                            delay: 0.9
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Share text statuses or photo captions instantly.</motion.p>
            </div>

            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500'></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: -15,
                        transition: {
                            duration: 0.8,
                            delay: 1.2
                        }
                    }}
                    viewport={{
                        once: true,
                    }}

                    className="text-lg">Express thoughts, ideas, or moments from your life.</motion.p>
            </div>
            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: -15,
                        transition: {
                            duration: 0.8,
                            delay: 1.5
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Updates appear in real time on your personal feed.</motion.p>
            </div>
            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        // scale: 0.7,
                        x: -15,
                        transition: {
                            duration: 0.8,
                            delay: 1.8
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Built for both casual sharing and deep expression.</motion.p>
            </div>
        </div>
    )

    const WritingPar3 = (
        <div className="space-y-5 w-1/2 text-center ">

            <motion.p
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 15,
                    transition: {
                        duration: 0.8,
                        delay: 0.6
                    }
                }}
                viewport={{
                    once: true,
                }}
                className="font-semibold md:text-4xl text-left">Real-Time Chat with Friends</motion.p>


            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 15,
                        transition: {
                            duration: 0.8,
                            delay: 0.9
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Instant messaging with friends or groups..</motion.p>
            </div>

            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500'></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 15,
                        transition: {
                            duration: 0.8,
                            delay: 1.2
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">See when others are typing or have read your message..</motion.p>
            </div>
            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 15,
                        transition: {
                            duration: 0.8,
                            delay: 1.5
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Smooth real-time experience..</motion.p>
            </div>
            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 15,
                        transition: {
                            duration: 0.8,
                            delay: 1.8
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Stay connected anytime, anywhere.</motion.p>
            </div>
        </div>
    )



    const WritingPart4 = (
        <div className="space-y-5 w-1/2 text-center ">

            <motion.p
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: -15,
                    transition: {
                        duration: 0.8,
                        delay: 0.6
                    }
                }}
                viewport={{
                    once: true,
                }}
                className="font-semibold md:text-4xl text-left"> Friend Requests / Accept</motion.p>


            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: -15,
                        transition: {
                            duration: 0.8,
                            delay: 0.9
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Send/receive friend requests in real time...</motion.p>
            </div>

            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500'></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: -15,
                        transition: {
                            duration: 0.8,
                            delay: 1.2
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Grow your social circle naturally...</motion.p>
            </div>
            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: -15,
                        transition: {
                            duration: 0.8,
                            delay: 1.5
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Find, reconnect, and meet new people effortlessly..</motion.p>
            </div>
            <div className='flex space-x-2 items-center'>
                {/* <FontAwesomeIcon icon={faBullseye} size='lg' className='text-red-500' ></FontAwesomeIcon> */}
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        x: -15,
                        transition: {
                            duration: 0.8,
                            delay: 1.8
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-lg">Instant notifications when someone Sends Friend Request and Accepts</motion.p>
            </div>
        </div>
    )



    const ImagePart2 = (
        <div className='md:w-1/2 '>

            <motion.img src={UpdatePost}
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 15,
                    transition: {
                        duration: 1.8,
                        delay: 0.7
                    }
                }}
                viewport={{
                    once: true,
                }}
                className='md:h-[450px]' alt="" />
        </div>
    )

    const ImagePart3 = (
        <div className='md:w-1/2 '>

            <motion.img src={RealTimeChat}
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: -15,
                    scale: 1.02,
                    transition: {
                        duration: 2,
                        delay: 0.7
                    }
                }}
                viewport={{
                    once: true,
                }}
                className='md:h-[450px]' alt="" />
        </div>
    )
    const ImagePart4 = (
        <div className='md:w-1/2 '>

            <motion.img src={FriendRequest}
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 15,
                    transition: {
                        duration: 2,
                        delay: 0.7
                    }
                }}
                viewport={{
                    once: true,
                }}
                className='md:h-[450px]' alt="" />
        </div>
    )







    return (
        <div className="md:max-w-[1340px] md:m-auto">

            <section >

                <Hero Component1={writingPart1} Component2={ImagePart1} height={`h-screen`} ></Hero>
            </section>

            <section

                className='md:text-5xl font-semibold text-center mb-20'>
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1.1,
                        y: 20,
                        transition: {
                            duration: 0.7,
                            delay: 0.4
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    Features You Will Get</motion.p>
            </section>

            <main className='space-y-15'>
                <section className='px-4'>
                    <Hero Component1={ImagePart2} Component2={WritingPar2}  ></Hero>
                </section>
                <section className='px-4'>
                    <Hero Component1={WritingPar3} Component2={ImagePart3}  ></Hero>
                </section>
                <section className='px-4'>
                    <Hero Component1={ImagePart4} Component2={WritingPart4}  ></Hero>
                </section>



            </main>


            <section className='my-20 text-center'>
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1.1,
                        y: 20,
                        transition: {
                            duration: 0.7,
                            delay: 0.4
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='font-semibold text-5xl'>How to get Started with <span className='text-orange-500'>M</span>eetup🔥</motion.p>
            </section>


            <section>
                <StepToUse></StepToUse>
            </section>







        </div>
    )
}
