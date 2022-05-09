import styles from './BoxModel.module.css'
import { useEffect } from 'react';
import { useRef } from 'react';




const BoxModel = () =>{

const myRef = useRef(null);

useEffect(() => {
  
    setInterval(() => {
      let greenBox = myRef.current.className = styles.green
      myRef.current.className = greenBox }, 1000)

      setInterval(()=>{
        let redBox = myRef.current.className = styles.red
        myRef.current.className=redBox
      },2000)
   
  }, [])

return (

<div ref={myRef}></div>

)}

export default BoxModel