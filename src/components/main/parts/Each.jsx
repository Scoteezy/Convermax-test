/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
const Each = ({styles,changeExactTime}) => {
  const store = useSelector((store)=>store.schedule.schedule)
  const [value,setValue] = useState('');

  useEffect(()=>{
    setValue(store.exactTime);
    return()=>{
      setValue('')
    }
  },[store.exactTime])
  return (
    
    <div className={`schedule__types-type-each ${styles.eachStyles}`}>
    <label>
          Each
          <input value={value} placeholder="minute" required min='0' max='59' onChange={changeExactTime} type="number" />
        </label> 
  </div>
  )
}

export default Each