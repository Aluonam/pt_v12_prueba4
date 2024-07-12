import { useEffect, useState } from "react"

export interface dayHour {
    day: string;
    hour: string;
}
const ActualDate = () => {

    const [date, setDate] = useState<dayHour>({
            day: '',
            hour:'',
            });

    useEffect(() => {
      const interval = setInterval(()=>{
        const newDate = new Date();
        const dayDate = newDate.toLocaleString().split(' ')[0]
        const hourDate = newDate.toLocaleString().split(' ')[1]
        console.log(hourDate, 'y la hora es: ', dayDate)
        setDate({day: dayDate, hour: hourDate})
      }, 1000)
      return ()=>clearInterval(interval)
    }, [])
    


  return (
    <div>
        <h3>Today is: {date.day}</h3> 
        <h3>The time is: {date.hour}</h3> 
    </div>
  )
}

export default ActualDate