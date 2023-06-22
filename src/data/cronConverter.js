const cronConverter = (dateFormat) => {
  let cronString = '';
  let days = ''
  switch(dateFormat.type){
    case 'EachXMinutes':
        if(+dateFormat.exactTime && +dateFormat.exactTime>0 && +dateFormat.exactTime<=59){
            cronString=` */${dateFormat.exactTime} * * * * *`
        }else{
            cronString = "Time wasn't choosen or incorrect";
            return cronString;
        }
        break;
    case 'Weekly':
        if(dateFormat.day && dateFormat.minute && dateFormat.hour){
            days = dateFormat.day.map(el=>`${el}`);
            cronString =`${dateFormat.minute} ${dateFormat.hour} * * ${days} *`;

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
            days = dateFormat.day.map(el=>`${el}`);
            cronString = `${dateFormat.minute} ${dateFormat.hour} ${dateFormat.monthDay} * ${days} *`    
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