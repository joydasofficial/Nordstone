import { useRouter } from "next/router";
import React from "react";
import styles from "./style.module.scss";

const Landing = () => {
  const router = useRouter();

  return (
    <div className={styles.landingContainer}>
      <div className={styles.cardContainer}>
        <div
          onClick={() => router.push("/notification")}
          className={styles.divButton}
        >
          Notification
        </div>
        <div
          onClick={() => router.push("/uploadimage")}
          className={styles.divButton}
        >
          Upload Image
        </div>
        <div
          onClick={() => router.push("/uploadtext")}
          className={styles.divButton}
        >
          Upload Text
        </div>
        <div
          onClick={() => router.push("/calculator")}
          className={styles.divButton}
        >
          Calculator
        </div>
      </div>
    </div>
  );
};

export default Landing;
