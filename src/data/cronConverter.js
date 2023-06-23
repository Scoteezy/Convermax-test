import {cronRegExp} from './index.js'
const cronConverter = (dateFormat) => {
  let cronString = '';
  switch(dateFormat.type){
    case 'EachXMinutes':
        if(+dateFormat.exactTime && +dateFormat.exactTime>0 && +dateFormat.exactTime<=59){
            cronString=`*/${Math.floor(dateFormat.exactTime)} * * * * *`
        }else{
            cronString = "Time wasn't choosen or incorrect";
            return cronString;
        }
        break;
    case 'Weekly':
        if(dateFormat.day && dateFormat.minute && dateFormat.hour){

            cronString =`${dateFormat.minute} ${dateFormat.hour} * * ${dateFormat.day} *`;

        }else{
            cronString = "Days or time wasn't choosen";
            return cronString;
        }
        break;
    case 'Daily':
        if(dateFormat.minute && dateFormat.hour){
            cronString =`${dateFormat.minute} ${dateFormat.hour} * * * *`;
        }else{
            cronString = "Time wasn't choosen";
            return cronString;
        }
        break;
    case 'Monthly':
        if(dateFormat.day && dateFormat.minute && dateFormat.hour && dateFormat.monthDay && +dateFormat.monthDay>=1 && +dateFormat.monthDay<=31){
            cronString = `${dateFormat.minute} ${dateFormat.hour} ${dateFormat.monthDay} * ${dateFormat.day} *`    
            if(cronString.match(cronRegExp)){
                return cronString;
            }else{
                cronString='Data error'
            }
        }else{
            cronString = "Days of the week or days of the month(or incorrect) or time wasn't choosen";
            return cronString;
        }
        break;
    default:
        cronString = "Type wasn't selected";
        break;
    }
return cronString;
}

export default cronConverter