import React from "react";
import styles from "./Section.module.css";


function Section({title,children}) {
    return (
        <section className={styles.container}>
            <h2>{title }</h2>
                {children}
        </section>
    )
};

export default Section;