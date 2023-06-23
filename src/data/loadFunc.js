import { cronRegExp } from './index'
const loadFunc = (cronString,cron) => {
  let timeObj = {
    minute: '5',
    hour:'',
    exactTime:'',
    day:'',
    monthDay:'',
    message:''
  }
    if(cronString.match(cronRegExp)){
        if(cron.minute!='*' && cron.hour!='*'){
        if((+cron.minute<=59 && +cron.minute>=0) && +cron.hour<=23 && +cron.hour>=0){
            timeObj.minute=cron.minute;
            timeObj.hour=cron.hour;
        }else{
            timeObj.message='Error';
            return timeObj;
        }
         
        }
        if(cron.minute!='*' && cron.hour=='*'){
          const minute = cron.minute.slice(2);
          if(+minute<=59 && +minute>=0){
            timeObj.exactTime=minute;
          }
          else{
            timeObj.message='Error';
            return timeObj;
            }
        }
        if(cron.dayOfWeek!='*'){
            const res = cron.dayOfWeek.split(',').map((day)=>{
                if(+day>=0 && +day<=6){
                    return true
                }else{return false}
            }).reduce((acum,item)=>acum*item)
            if(res==1){
                timeObj.day=cron.dayOfWeek
            }else{
                timeObj.minute = '';
                timeObj.hour='';
                timeObj.message='Error';
                return timeObj;
            }
        }
        if(cron.dayOfMonth!='*'){
            if(+cron.dayOfMonth>=1 && cron.dayOfMonth<=31){
                timeObj.monthDay =cron.dayOfMonth
            }else{
                timeObj.minute = '';
                timeObj.hour='';
                timeObj.day='';
                timeObj.message='Error';
                return timeObj; 
                }
        }
        timeObj.message ='All done'
      }
      return timeObj;
}

export default loadFunc