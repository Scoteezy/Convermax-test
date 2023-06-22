import{useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addMinutes,addExactTime,addDay,addMonthDay,addHour,addType} from '../../store/scheduleSlice'
import './footer.scss'
import cronConverter from '../../data/cronConverter'
const Footer = () => {
  const dispatch = useDispatch();
  const [cronString,setCronString] = useState('')
  const [type,setType] = useState('');
  const dateObg = useSelector((store)=>store.schedule.schedule);
  const [message,setMessage] = useState('');
  const handleSave= ()=>{
   const cron=  cronConverter(dateObg);
   setCronString(cron);
  }
  const handleLoad = (type)=>{
    if((type== 'Weekly' || type=='Daily' || type=='Monthly' || type=='EachXMinutes') && type==dateObg.type){
      if(cronString){
       const arr = cronString.split(' ');
       console.log(arr);
       let minute;
       let hour;
       let monthDay;
       let weekDay;
       if(arr[0]==''){
        minute=arr[1].split('/')[1];
        setMessage(`Task will be executed each ${minute} minutes`);
        return;
       }
       if(arr[0]!='*' && +arr[0]){
        minute=arr[0];
        hour=arr[1];
       }
       if(arr[2]!='*' && +arr[2]){
        monthDay=arr[2];
       }
       if(arr[4]!='*' && arr[4]){
        weekDay=arr[4];
       }
       if(!monthDay && weekDay){
        setMessage(`Task will be executed at ${hour}:${minute} at each weekday ${weekDay}`);
        return;
       }
       if(!weekDay){
        setMessage(`Task will be executed at ${hour}:${minute} every day`);
       }
       if(monthDay){
        setMessage(`Task will be executed at ${hour}:${minute} at each month day: ${monthDay} and each weekday ${weekDay}`);
       }

       if(!monthDay && !weekDay && !minute && !hour){
        setMessage(`Something went wrong`)
       }
      }else{
        setCronString('Input is empty')
      }
    }else{
      setCronString("Type wasn't selected or differs from form type")
    }
}
  useEffect(()=>{
    setType(dateObg.type);
  },[dateObg.type])
  return (
    <>
    {message}
     <div className='container'>
        <button onClick={()=>handleLoad(type)}>Load</button>
        <button onClick={handleSave}>Save</button>
    </div>
    <div className='input-container'>
    <input className='myinput' type="text" value={type} onChange={(e)=>setType(e.target.value)} />
    <input  value={cronString} onChange={(e)=>setCronString(e.target.value)} type="text" />
    </div>
   
    </>
   
  )
}

export default Footer