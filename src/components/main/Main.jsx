import {useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import {addMinutes,addExactTime,addDay,addMonthDay,addHour,addType,clearAll} from '../../store/scheduleSlice'
import useStyles from "../../hooks/useStyles";
import "./main.scss";
import Weekly from "./parts/Weekly";
import Daily from "./parts/Daily";
import Monthly from "./parts/Monthly";
import Each from "./parts/Each";
const Main = () => {
  const [type,setType] = useState('');
  const [exactTimeInput,setExactTimeInput] = useState('');
  const styles = useStyles(type);
  const info = useSelector((store)=>store.schedule.schedule)
  const dispatch = useDispatch();
  const changeSelect = (e)=>{
    if(e.target.value==='Choose type'){
     setType('');
     setExactTimeInput('');
     dispatch(clearAll());
    }else{
      setType(e.target.value);
      dispatch(addType({type:e.target.value}))
      dispatch(clearAll());

    }
  }
  const changeDay = (data)=>{
    const day = data.map((el)=>el.value);
    dispatch(addDay({day}))
  }
  const changeExactTime = (e)=>{
    const exactTime = e.target.value;
    setExactTimeInput(exactTime);
    dispatch(addExactTime({exactTime}));
  }
  const changeTime = (e)=>{
    const time = e.target.value.split(':');
    const hour = time[0];
    const minutes = time[1];
    dispatch(addHour({hour}));
    dispatch(addMinutes({minutes}))
  }
  const changeMonthDay =(e)=>{
    const day = e.target.value;
    dispatch(addMonthDay({day}))
  }
  console.log(info)
  return (
    <>
      <h1>Schedule</h1>
      <div className="schedule">
        <select className="schedule__type" onChange={(e)=>{changeSelect(e)}} name="schedule type" id="">
          <option>Choose type</option>
          <option value="EachXMinutes">Each x minutes</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
          <option value="Monthly">Monthly</option>
        </select>
        <div className="schedule__types">
        <Each styles={styles} exactTimeInput={exactTimeInput} changeExactTime={changeExactTime}/>
        <Weekly changeDay={changeDay} styles={styles} changeTime={changeTime}/>
        <Daily changeTime={changeTime} styles={styles}/>
        <Monthly styles={styles} changeMonthDay={changeMonthDay} changeTime={changeTime} changeDay={changeDay}/>
        </div>
      </div>
    </>
  );
};

export default Main;
