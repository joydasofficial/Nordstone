import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.scss";

//typewriter
import Typewriter from "typewriter-effect";

import cookieCutter from 'cookie-cutter'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let timeout = setTimeout(()=>{
      if(cookieCutter.get('user')){
        router.push('/landing')
      }else{
        router.push('/signup')
      }
    },2000)
    return ()=>{
      clearTimeout(timeout)
    }
  }, []);

  return (
    <>
      {/* <Notifications /> */}
      <div className={styles.splashScreen}>
        <h1>
          <Typewriter
            options={{
              strings: ["Nordstone"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </>
  );
}
