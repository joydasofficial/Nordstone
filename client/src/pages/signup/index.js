import React, { useEffect } from "react";
import styles from "./style.module.scss";

//firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'

import cookieCutter from 'cookie-cutter'

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const Signup = () => {

  const router = useRouter()

  useEffect(()=>{
    if(cookieCutter.get('user')){
      router.push('/landing')
    }
  },[])

  const initialValues = {
    email: "",
    password: "",
    cpassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
    cpassword: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = async(formValue, values) => {
    const { email, password, cpassword } = formValue;

    if (password !== cpassword) {
      alert("Password does not match");
    } else {
      try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password)
        if(userCred.user.uid !== undefined){
          cookieCutter.set('user', userCred.user.uid)
          router.push('/landing')
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <h2>Sign up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            <div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className={styles.formInput} />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.formError}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={styles.formInput}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.formError}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cpassword">Confirm Password</label>
                <Field
                  name="cpassword"
                  type="password"
                  className={styles.formInput}
                />
                <ErrorMessage
                  name="cpassword"
                  component="div"
                  className={styles.formError}
                />
              </div>

              <div className={styles.formGroup}>
                <button type="submit" className={styles.button}>
                  Sign Up
                </button>
                <p>Already have an account? <span className={styles.linktext} onClick={()=>router.push('/signin')}>Sign In</span></p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
