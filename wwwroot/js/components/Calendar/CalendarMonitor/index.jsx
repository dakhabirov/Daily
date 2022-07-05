const ContentWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    background-color: #1E1F21;
    color: #DCDDDD;
    padding: 16px;
`;

const TextWrapper = styled('span')`
    font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
    font-weight: bold;
    margin-right: 8px;
`;

const SwitchWrapper = styled('div')`
    align-self: center;
`;

const ButtonWrapper = styled('button')`
    border: unset;
    background-color: #565759;
    height: 20xp;
    margin-right: 2px;
    border-radius: 4px;
    color: #E6E6E6;
    padding: 1px 5px 1px 5px;
`;

const TodayButton = styled(ButtonWrapper)`
    padding-right: 16px;
    padding-left: 16px;
    font-weight: bold;
`;

function CalendarMonitor({today}) {

    return (
        <ContentWrapper>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <TextWrapper>{today.format('YYYY')}</TextWrapper>
            </div>
            <SwitchWrapper>
                <ButtonWrapper> &lt; </ButtonWrapper>
                <TodayButton> Today </TodayButton>
                <ButtonWrapper> &gt; </ButtonWrapper>
            </SwitchWrapper>
        </ContentWrapper>
    );
}

export default CalendarMonitor