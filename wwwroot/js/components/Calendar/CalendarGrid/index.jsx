import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1.25px;
    background-color: #404040;
`;

const CellWrapper = styled.div`
    min-width: 140px;
    min-height: 80px;
    background-color: ${props => props.isWeekend ? '#272829' : '#1E1F21' };
    color: #DDDCDD;
`;

const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CalendarGrid = ({startDay}) => {
    const totalDays = 42;
    const day = startDay.clone();
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
    return(
        <GridWrapper>
            {
                daysArray.map((dayItem) => (
                    <CellWrapper
                        key={dayItem.format('DDMMYYYY')}
                        isWeekend={dayItem.day() === 6 || dayItem.day() === 0}  // если сб или вс
                    >
                        <RowInCell
                            justifyContent = {'flex-end'}
                        >
                            <DayWrapper>
                                {dayItem.format('D')}
                            </DayWrapper>
                        </RowInCell>
                    </CellWrapper>
                ))
            }
        </GridWrapper>
    );
}

export { CalendarGrid }