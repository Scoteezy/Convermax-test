import {useEffect,useState} from 'react'

const useStyles = (type) => {
    const [weeklyStyles,setWeeklyStyles] = useState('')
    const[eachStyles,setEachStyles] = useState('');
    const [dailyStyles,setDailyStyles] = useState('');
    const [monthlyStyles,setMonthlyStyles] = useState('');

    useEffect(()=>{
        switch(type){
                case 'EachXMinutes':
                  setEachStyles('active');
                  setWeeklyStyles('');
                  setDailyStyles('');
                  setMonthlyStyles('');
                  break;
                case 'Weekly':
                  setWeeklyStyles('active');
                  setDailyStyles('');
                  setEachStyles('');
                  setMonthlyStyles('');
                  break;
                case 'Daily':
                setWeeklyStyles('');
                setDailyStyles('active');
                setEachStyles('');
                setMonthlyStyles('');
                break;
              case 'Monthly':
                setWeeklyStyles('');
                setDailyStyles('');
                setEachStyles('');
                setMonthlyStyles('active');
                break;
              default:
                setWeeklyStyles('');
                setDailyStyles('');
                setEachStyles('');
                setMonthlyStyles('');
                break;
        }
      },[type])
  return {weeklyStyles,eachStyles,monthlyStyles,dailyStyles};
}

export default useStyles