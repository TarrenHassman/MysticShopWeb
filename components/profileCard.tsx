import React from "react";
import styles from "../styles/Home.module.css"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import { Permanent_Marker } from "next/font/google";
import { useRouter } from "next/router";

const marker = Permanent_Marker(
    {
        weight: "400",
        subsets: ['latin']
    }
)

export default function ProfileCard() {
    const router = useRouter();

    return (
        <div>
            <div
                className={styles.test}
            ></div>
            <div className={styles.profile} >
                <div className={styles.profileImg}>
                </div>
                <Link
                    className={styles.alpha} href={"/alpha"}>
                    <button
                        onClick={() => router.push('/alpha')}
                        className={[marker.className, styles.gradientText4].join(" ")} style={{
                            color: "transparent",
                        }}>
                        Alpha Content
                    </button>
                </Link>
                <div className={styles.walletConnect}>
                    <ConnectWallet
                        theme="dark"
                        btnTitle="Connect Wallet" />
                </div>
            </div>
        </div>
    )
}