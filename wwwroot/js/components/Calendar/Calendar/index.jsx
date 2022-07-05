import CalendarHeader from '../CalendarHeader/index.jsx';
import CalendarMonitor from '../CalendarMonitor/index.jsx';
import CalendarGrid from '../CalendarGrid/index.jsx';
import moment from '/node_modules/moment/dist/moment.js';

const ContentWrapper = styled('div')`
    border-top: 1px solid #737374;
    border-left: 1px solid #644648;
    border-right: 1px solid #464648;
    border-bottom: 2px solid #464648;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;

function Calendar() {
    // moment.updateLocale('en', {
    //     week: {
    //         dow: 1
    //     }
    // });
    const today = moment();
    const startDay = today.clone().startOf('month').startOf('week');

    return(
        <ContentWrapper>
            <CalendarHeader />
            <CalendarMonitor today={today} />
            <CalendarGrid startDay={startDay} />
        </ContentWrapper>
    );
}

export default Calendar