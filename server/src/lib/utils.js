

const isLessThen10 =(number)=>{
    return number<10;
}

const addZeroIfNeeded =(number)=>{
    if(isLessThen10(number)) 
    {
        number ='0'+ number;
    }
    return number;
}

 const getDateDisplay=(date)=>{
    let dd = addZeroIfNeeded(date.getDate());
    let mm = addZeroIfNeeded(date.getMonth()+1);
    let hour = addZeroIfNeeded(date.getHours());
    let minutes = addZeroIfNeeded(date.getMinutes());

    const formatedDay = dd + "/" + mm + "/"+ date.getFullYear();
    const formatedHour = hour + ":" + minutes;
    return formatedDay + " - " + formatedHour;
}

 const log = (str) =>{
    let logMsg = getDateDisplay(new Date()) + ` ----   ` + str;
    console.log(logMsg);
}


module.exports = {
    isLessThen10: isLessThen10,
    log: log
}