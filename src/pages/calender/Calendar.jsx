//カレンダー　全ページ共通
import  { useContext} from 'react'
import {ScheduleContext} from '../../conponents/ScheduleContext';

function Calendar() {
    const{selectedDate,setSelectedDate} = useContext(ScheduleContext);

return (
    <div> 
        {/* 日付選択 */}
        <input type="date"
        value={selectedDate}
        onChange={(e)=>
            setSelectedDate(e.target.value)
        }
        />
        <h1>カレンダー</h1>        
    </div>
);
}

export default Calendar