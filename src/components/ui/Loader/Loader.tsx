"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.scss";

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        // Check if the page is already loaded
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <div className={`${styles.overlay} ${!loading ? styles.hidden : ""}`}>
            <div className={styles.loader}></div>
        </div>
    );
}
