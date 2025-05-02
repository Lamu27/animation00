import { Content } from "./Component/Content"
import { TimeLineMiddle } from "./Component/TimeLineMiddle"
import CreateAccount from '../../../assets/images/Landing-Page/CreateAccount2.webp'

import AddFreind from '../../../assets/images/Landing-Page/AddFriend.webp'
import Comment from '../../../assets/images/Landing-Page/Comment.png'

import UploadImage from '../../../assets/images/Landing-Page/UploadImage.webp'


import GroupChat from '../../../assets/images/Landing-Page/GroupChat.png'
import SendMessage from '../../../assets/images/Landing-Page/SendMessage.webp'
import { motion, useInView } from 'framer-motion'
import { duration } from "@mui/material"




export const StepToUse = () => {


    const Content1 = (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                x: -10,
                transition: {
                    delay: 0.5,
                    duration: 0.9
                }
            }}
            viewport={{
                once: true,
            }}
            className="text-center">
            <p className="font-semibold text-2xl">Step One</p>
            <p className="font-semibold text-lg">Create Account and Sign in</p>
        </motion.div>
    )

    const Content2 = (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                x: -10,
                transition: {
                    delay: 0.7,
                    duration: 0.9
                }
            }}
            viewport={{
                once: true,
            }}
            className="text-center">
            <p className="font-semibold text-2xl">Step Two</p>
            <p className="font-semibold text-lg">Search For Friends And Send Friend Request</p>
        </motion.div>
    )

    const Content3 = (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                x: -10,
                transition: {
                    delay: 0.9,
                    duration: 0.9
                }
            }}
            viewport={{
                once: true,
            }}
            className="text-center">
            <p className="font-semibold text-2xl">Step Three</p>
            <p className="font-semibold text-lg">Like And Write Your Emotions to your Friends Post </p>
        </motion.div>
    )

    const Content4 = (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                x: -10,
                transition: {
                    delay: 1.1,
                    duration: 0.9
                }
            }}
            viewport={{
                once: true,
            }}
            className="text-center">
            <p className="font-semibold text-2xl">Step Four</p>
            <p className="font-semibold text-lg">Update Your Feed With Status or Photo with Captions </p>
        </motion.div>
    )

    const Content5 = (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                x: -10,
                transition: {
                    delay: 1.3,
                    duration: 0.9
                }
            }}
            viewport={{
                once: true,
            }}
            className="text-center">
            <p className="font-semibold text-2xl">Step Five</p>
            <p className="font-semibold text-lg">Send Message to your Friends  </p>
        </motion.div>
    )

    const Content6 = (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                x: -10,
                transition: {
                    delay: 1.5,
                    duration: 0.9
                }
            }}
            viewport={{
                once: true,
            }}
            className="text-center">
            <p className="font-semibold text-2xl">Step Six</p>
            <p className="font-semibold text-lg"> Make a group and Send Messages  </p>
        </motion.div>
    )
    const Content7 = (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
                x: -10,
                transition: {
                    delay: 1.7,
                    duration: 0.9
                }
            }}
            viewport={{
                once: true,
            }}
            className="text-center">
            <p className="font-semibold text-2xl">In Future</p>
            <p className="font-semibold text-lg">More Feature will come </p>
        </motion.div>
    )

    return (
        <div>


            <ul className="timeline timeline-vertical">
                <li>
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 5,
                            transition: {
                                delay: 0.5,
                                duration: 0.9
                            }
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="timeline-start timeline-box">

                        <Content img={CreateAccount} content={Content1}  ></Content>

                    </motion.div>
                    <TimeLineMiddle></TimeLineMiddle>

                    <hr />
                </li>
                <li>
                    <hr />
                    <TimeLineMiddle></TimeLineMiddle>

                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 5,
                            transition: {
                                delay: 0.7,
                                duration: 0.9
                            }
                        }}
                        viewport={{
                            once: true,
                        }}

                        className="timeline-end timeline-box">

                        <Content img={AddFreind} content={Content2}  ></Content>

                    </motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 5,
                            transition: {
                                delay: 0.9,
                                duration: 0.9
                            }
                        }}
                        viewport={{
                            once: true,
                        }}

                        className="timeline-start timeline-box">

                        <Content img={Comment} content={Content3}  ></Content>

                    </motion.div>
                    <TimeLineMiddle></TimeLineMiddle>
                    <hr />
                </li>
                <li>
                    <hr />
                    <TimeLineMiddle></TimeLineMiddle>
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 5,
                            transition: {
                                delay: 1.1,
                                duration: 0.9
                            }
                        }}
                        viewport={{
                            once: true,
                        }}

                        className="timeline-end timeline-box">

                        <Content img={UploadImage} content={Content4}  ></Content>

                    </motion.div>

                    <hr />
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 5,
                            transition: {
                                delay: 1.3,
                                duration: 0.9
                            }
                        }}
                        viewport={{
                            once: true,
                        }}

                        className="timeline-start timeline-box">

                        <Content img={SendMessage} content={Content5}  ></Content>

                    </motion.div>
                    <TimeLineMiddle></TimeLineMiddle>
                    <hr />
                </li>
                <li>
                    <hr />

                    <TimeLineMiddle></TimeLineMiddle>
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 5,
                            transition: {
                                delay: 1.5,
                                duration: 0.9
                            }
                        }}
                        viewport={{
                            once: true,
                        }}

                        className="timeline-end timeline-box">

                        <Content img={GroupChat} content={Content6}  ></Content>

                    </motion.div>
                    <hr />
                </li>

                <li>
                    <hr />

                    <TimeLineMiddle></TimeLineMiddle>
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 5,
                            transition: {
                                delay: 1.7,
                                duration: 0.9
                            }
                        }}
                        viewport={{
                            once: true,
                        }}

                        className="timeline-start timeline-box">

                        <Content img={CreateAccount} content={Content7}  ></Content>

                    </motion.div>
                </li>

            </ul>
        </div>
    )
}
