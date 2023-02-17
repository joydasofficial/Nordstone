import React, { useState } from 'react'
import styles from './style.module.scss'
import axios from 'axios'

const Calculator = () => {

  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [opr, setOpr] = useState('add')
  const [result, setResult] = useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8001/calculate', {"input1": input1, "input2": input2, "opr": opr})
      setResult(res.data.result)
    } catch (error) {
     console.log(error); 
    }
 
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <h2>Result : {(result!=null) ? result : 0}</h2>
        <form onSubmit={handleSubmit}> 
          <input type='number' onChange={(e)=>setInput1(e.target.value)} required/>
          <input type='number' onChange={(e)=>setInput2(e.target.value)} required/>
          <select onChange={(e)=>setOpr(e.target.value)}>
            <option value='add'>Add</option>
            <option value='sub'>Subtract</option>
            <option value='multiply'>Multiply</option>
            <option value='divide'>Divide</option>
          </select>
          <button type='submit'>Calculate</button>
        </form>
      </div>
    </div>
  )
}

export default Calculator