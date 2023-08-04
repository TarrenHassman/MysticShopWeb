import { motion, useScroll } from "framer-motion"
import Image from "next/image";
export default function ShopArt() {
    const { scrollYProgress } = useScroll();
    console.log( scrollYProgress.get())
    return (
        <div>
                <motion.img
                style={{
                    opacity: scrollYProgress,
                   width:"50%",
                   height:"50%"
                }}
                    src="/images/EtheralShop.png"
                    alt="Placeholder preview of starter"
                />
            <motion.div
            style={{
                float:"left"
            }}
            whileInView={
                {
                    transform: "translateX(50wh)"
                }
            }
            >
                <img
                    src={"/images/Cloud1.png"}
                    alt={""}
                />
            </motion.div>
        </div>
    )
}