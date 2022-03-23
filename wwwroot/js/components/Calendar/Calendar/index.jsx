import CalendarHeader from '../CalendarHeader/index.jsx';
import CalendarMonitor from '../CalendarMonitor/index.jsx';
import CalendarGrid from '../CalendarGrid/index.jsx';
import moment from '/node_modules/moment/dist/moment.js'

function Calendar() {
    // moment.updateLocale('en', {
    //     week: {
    //         dow: 1
    //     }
    // });
    const startDay = moment().startOf('month').startOf('week');

    return(
        <div>
            <CalendarHeader />
            <CalendarMonitor />
            <CalendarGrid startDay={startDay} />
        </div>
    );
}

export default Calendar