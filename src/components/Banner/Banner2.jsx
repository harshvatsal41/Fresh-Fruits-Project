import BannerPng from "../../assets/fruit-plate2.png"
import {motion} from "framer-motion";
import {FadeRight, FadeUp} from "../../utility/Animation.jsx";
import React from "react";

const Banner = () =>{
    return(
        <section className="">
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">



                {/*Brand Info*/}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <motion.h1
                            variants={FadeUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once:true }}
                            className="text-3xl lg:text-6xl font-bold uppercase">
                            {"  "}
                            Brand Info
                        </motion.h1>
                        <motion.p
                            variants={FadeUp(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once:true }}
                        >
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Id nam
                            obcaecati sequi odio dolore partijano bella chow
                            Opartizaaano , oomari via,
                            eos, aut asperiores reprehenderit quas rerum omnis
                            facilis quam!
                        </motion.p>
                        <motion.p
                            variants={FadeUp(0.9)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once:true }}
                        >
                            lorem hasta niet shchostzel prombinano
                            apjfaf joaefbaef efnt. awdwadaw
                            vero haobe jjter inadn ad ducium alias doloberium.
                        </motion.p>
                        {/*button section*/}
                        <motion.div
                            variants={FadeUp(1.1)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center md:justify-start">
                            <button className="primary-btn" >
                                Learn More
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/*Banner Image*/}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{opacity:0,x:200,rotate:75}}
                        whileInView={{opacity:1,x:0,rotate:0}}
                        transition={{duration:1,delay:0.2}}
                        viewport={{once:true}}
                        src={BannerPng}
                        alt=""
                        className="w-[300px] md:maw-w-[400xl] h-full
                        object-cover drop-shadow"></motion.img>
                </div>

            </div>
        </section>
    );
}

export default Banner;