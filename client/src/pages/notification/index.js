import React from "react";
import styles from './style.module.scss'
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Notification = () => {
  return (
    <>
      <NotificationContainer />
      <div className={styles.mainContainer}>
        <button
          onClick={() => NotificationManager.info("You're very brave")}
        >
          Click me if you can!
        </button>
      </div>
    </>
  );
};

export default Notification;
