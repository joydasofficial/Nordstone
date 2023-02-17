import { useState, useEffect, use } from "react";
import styles from "./style.module.scss";
import axios from "axios";

//firebase
import { db } from "../../firebase";
import { set, ref, onValue } from "firebase/database";

const UplaodText = () => {
  const [text, setText] = useState("");
  const [dText, setDText] = useState("");

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setDText(data.text.text);
    });
  }, []);

  const handleClick = async () => {
    set(ref(db, "/text"), {
      text,
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <h2>{dText}</h2>
        <input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  );
};

export default UplaodText;
