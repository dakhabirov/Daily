import CalendarHeader from '../CalendarHeader/index.jsx';
import CalendarMonitor from '../CalendarMonitor/index.jsx';
//import {CalendarGrid} from './CalendarGrid/index.jsx';

function Calendar() {
    //const startDay = moment().startOf('month').startOf('week');

    return(
        <div>
            <CalendarHeader />
            <CalendarMonitor />
            {/* <CalendarGrid startDay={startDay} /> */}
        </div>
    );
}

export default Calendar