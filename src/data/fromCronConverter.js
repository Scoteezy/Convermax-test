function cronToDate(cronExpression) {
    const cronParts = cronExpression.split(' ');

    // Разбор выражения Cron
    const minute = cronParts[0];
    const hour = cronParts[1];
    const dayOfMonth = cronParts[2];
    const month = cronParts[3];
    const dayOfWeek = cronParts[4];
  
    // Создание объекта с значениями из выражения Cron
    const cronObject = {
      minute: minute,
      hour: hour,
      dayOfMonth: dayOfMonth,
      month: month,
      dayOfWeek: dayOfWeek
    };
  
    return cronObject;
  }
  
  export default cronToDate;