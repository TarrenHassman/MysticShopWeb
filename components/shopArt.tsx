import { motion, useScroll } from "framer-motion"
import Image from "next/image";
import styles from "../styles/Home.module.css"
export default function ShopArt() {
    const { scrollYProgress } = useScroll();
    console.log(scrollYProgress.get())
    //Authenticated* Route loaded widget
    return (
        <div>
            <motion.img
                style={{
                    width: "50%",
                    height: "50%"
                }}
                src="/images/EtheralShop.png"
                alt="Placeholder preview of starter"
            />
            <motion.div
                style={{
                    float: "right",
                    transform:"translateX(60wh)"
                }}
            > <div className={styles.card}>

                    <h1>
                        Build a 3d shop to sell real world goods with virtual, nft counterparts
                    </h1>
                </div>
                <img
                    src={"/images/Cloud1.png"}
                    alt={""}
                />
            </motion.div>
        </div>
    )
}