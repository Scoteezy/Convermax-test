/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
const Weekly = ({changeDay,styles,changeTime}) => {
  const store = useSelector((store)=>store.schedule.schedule)
  const [value,setValue] = useState('');
  const [days,setDays] = useState([]);
  useEffect(()=>{
    setValue(`${store.hour}:${store.minute}`);
      setDays(store.day);
      if(store.day){
        setDays(store.day.split(','));
      }
    return()=>{
      setValue('')
    setDays([]);
    }
  },[store.type,store.hour,store.minute,store.day])
  return (
    <div className={`schedule__types-type-weekly ${styles.weeklyStyles}`}>
    <label>
      Every Day
    <select multiple onChange={changeDay} value={days}>
      <option value="0">Sunday</option>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
    </select>
    </label>
    <label>
      At
      <input value={value} onChange={changeTime} type="time" />
    </label>
</div>
  )
}

export default Weekly