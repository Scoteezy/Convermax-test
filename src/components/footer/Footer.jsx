import{useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {cronRegExp} from '../../data/index.js'
import cronToDate from '../../data/fromCronConverter.js'
import {addMinutes,addExactTime,addDay,addMonthDay,addHour,clearAll} from '../../store/scheduleSlice'
import loadFunc from '../../data/loadFunc.js'
import './footer.scss'
import cronConverter from '../../data/cronConverter'
const Footer = () => {
  const dispatch = useDispatch();
  const [cronString,setCronString] = useState('')
  const [type,setType] = useState('');
  const dateObg = useSelector((store)=>store.schedule.schedule);
  const [message,setMessage] = useState('');
  let cronObj = {};
  const handleSave= ()=>{
   const cron=  cronConverter(dateObg);
   setCronString(cron);
   if(cron.match(cronRegExp)){
    dispatch(clearAll());
   }
  }
  const handleLoad = ()=>{
      if(cronString.match(cronRegExp)){
        cronObj= cronToDate(cronString);
        const timeObj = loadFunc(cronString,cronObj);
        dispatch(clearAll());
        dispatch(addMinutes({minutes: timeObj.minute}))
        dispatch(addHour({hour:timeObj.hour}))
        dispatch(addDay(({day:timeObj.day})))
        dispatch(addExactTime({exactTime: timeObj.exactTime}))
        dispatch(addMonthDay({day:timeObj.monthDay}))
        setMessage(timeObj.message)
      }else{setMessage('Error')}
}
  useEffect(()=>{
    setType(dateObg.type);
    setMessage('')
    setCronString('');
  },[dateObg.type])
  return (
    <>
    {message}
     <div className='container'>
        <button onClick={()=>handleLoad(type)}>Load</button>
        <button onClick={handleSave}>Save</button>
    </div>
    <div className='input-container'>
    <input className='myinput' disabled type="text" value={type} onChange={(e)=>setType(e.target.value)} />
    <input  value={cronString} onChange={(e)=>setCronString(e.target.value)} type="text" />
    </div>
   
    </>
   
  )
}

export default Footer