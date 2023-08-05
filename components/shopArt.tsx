import { motion } from "framer-motion"
import Image from "next/image";
import styles from "../styles/Home.module.css"
export default function ShopArt() {
    //Authenticated* Route loaded widget
    return (
        <div>
            <motion.img
                style={{
                    transform: "translateY(55vh)",
                    width: "50%",
                    height: "50%"
                }}
                src="/images/EtheralShop.png"
                alt="Placeholder preview of starter"
            />
<div
style={{
    padding:"20px"
}}
>
                <h1 
                style={
                                {
                                    transform: "translateY(5vh)",
                                    textAlign:"right",
                                    padding: "1em",
                                    float: "right",
                                    backgroundColor: "#4a0b6cac",
                                    borderRadius: "10px"
                                }
                            }>Build a 3d Shop to Sell real world goods</h1>
            </div>
            <motion.div
                style={{
                    float: "right",
                }}
            >
                <img
                    src={"/images/Cloud1.png"}
                    alt={""}
                />
            </motion.div>
        </div>
    )
}