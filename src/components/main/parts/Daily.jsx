/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
const Daily = ({changeTime,styles}) => {
  const store = useSelector((store)=>store.schedule.schedule)
  const [value,setValue] = useState('');
  useEffect(()=>{
    setValue(`${store.hour}:${store.minute}`);
    return()=>{
      setValue('')
    }
  },[store.type,store.hour,store.minute])
 
  return (
    <div className={`schedule__types-type-daily ${styles.dailyStyles}`}>
    <label>
      At
      <input onChange={changeTime} value={value} required type="time" />
    </label>
  </div>
  )
}

export default Daily