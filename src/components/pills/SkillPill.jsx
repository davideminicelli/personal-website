"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const SkillPill = ({imageUrl, children})=> {
    return (
        <div className="bg-white flex overflow-hidden p-1 rounded-full items-center">
            <Image width={50} alt="" height={50} className="aspect-square rounded-full" src={imageUrl}/>
            <motion.p
            initial={{
                width: 0,
                margin: 0
            }}
            animate={{
                width: "100%",
                margin: ".75rem"
            }}
            transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 70
            }}
            className="overflow-hidden uppercase font-medium">{children}</motion.p>
        </div>
    )
}

export default SkillPill