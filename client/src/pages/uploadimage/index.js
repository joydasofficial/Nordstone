import React, { useState, useEffect } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

import styles from "./style.module.scss";

const UploadImage = () => {
  const [imgUpload, setImgUpload] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  const firebaseImgRef = ref(storage, "pictures/");

  useEffect(() => {
    listAll(firebaseImgRef).then((res) => {
      if(res.items.length>0){
        getDownloadURL(res.items[0]).then((url) => {
          setImgURL(url);
        });
      }
    
    });
  }, []);

  const handleUpload = (e) => {
    let imgRef;

    if (imgUpload == null) return;

    imgRef = ref(storage, `pictures/image`);
    
    uploadBytes(imgRef, imgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgURL(url);
        alert("image uploaded");
      });
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImgUpload(e.target.files[0])}
        />
        <button onClick={handleUpload}>Upload Image</button>
      </div>
      <div className={styles.imageContainer}>{imgURL && <img src={imgURL} />}</div>
    </div>
  );
};

export default UploadImage;
