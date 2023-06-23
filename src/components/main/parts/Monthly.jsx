/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
const Monthly = ({styles,changeMonthDay,changeTime,changeDay}) => {
  const store = useSelector((store)=>store.schedule.schedule)
  const [monthDay,setMonthDay] = useState('');
  const [time,setTime] = useState('');
  const [days,setDays] = useState([]);
  useEffect(()=>{
    setTime(`${store.hour}:${store.minute}`);
    setMonthDay(`${store.monthDay}`)
    if(store.day){
      setDays(store.day.split(','));
    }
    return()=>{
      setTime('')
      setMonthDay('');
      setDays([]);
    }
  },[store.type,store.hour,store.minute,store.monthDay,store.day])
 
  return (
    <div className={`schedule__types-type-monthly ${styles.monthlyStyles}`}>
    <label >
    On <input value={monthDay} onChange={changeMonthDay} min='1' max='31' type="number" />
    </label>
    <label >
    And      <select multiple onChange={changeDay} value={days}>
      <option value="0">Sunday</option>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
    </select>
    </label>
    <label >
    At    <input value={time} onChange={changeTime} required type="time" />
    </label>
  </div>
  )
}

export default Monthly