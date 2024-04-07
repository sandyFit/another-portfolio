import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
        },
        hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className='w-[55%] font-ibm text-[2rem] font-[400] uppercase text-zinc-400  tracking-widest 
                                leading-[40px] glitch pl-5'
        >
        {letters.map((letter, index) => (
            <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))}
        </motion.div>
    );
};

export default AnimatedTextCharacter;