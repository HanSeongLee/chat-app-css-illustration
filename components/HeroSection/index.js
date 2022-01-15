import React from "react";
import styles from './style.module.scss';
import BookingApp from "../BookingApp";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <BookingApp/>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Simple booking
                </h2>
                <p className={styles.description}>
                    Stay in touch with our dog walkers through the chat interface.
                    This makes it easy to discuss arrangements and make bookings.
                    Once the walk has been completed you can rate your walker and book again all through the chat.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
