/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
const Daily = ({changeTime,styles}) => {
  const store = useSelector((store)=>store.schedule.schedule)
  return (
    <div className={`schedule__types-type-daily ${styles.dailyStyles}`}>
    <label>
      At
      <input onChange={changeTime} value={`${store.hour}:${store.minute}`} required type="time" />
    </label>
  </div>
  )
}

export default Daily