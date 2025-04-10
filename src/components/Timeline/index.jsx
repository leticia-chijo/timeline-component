import styled from "styled-components";
import MonthsHeader from "./MonthsHeader";
import DaysHeader from "./DaysHeader";
import ContentGrid from "./ContentGrid";
import { colors } from "../../constants/colors";
import { getIntervalValues, isToday } from "../../utils/dateUtils";
import { assignLanes } from "../../utils/assignLanes";
import { DAY_WIDTH, MONTH_HEIGHT } from "../../constants/sizes";

export default function Timeline({ data }) {
  const { minDate, totalDays, dates, months } = getIntervalValues(data);
  const tasksInLanes = assignLanes(data);
  const todayIndex = dates.findIndex((date) => isToday(date));

  return (
    <TimelineWrapper>
      <MonthsHeader totalDays={totalDays} months={months} />
      <DaysHeader totalDays={totalDays} dates={dates} />
      <ContentGrid tasksInLanes={tasksInLanes} minDate={minDate} totalDays={totalDays} dates={dates} />
      {todayIndex !== -1 && <TodayHighlight $todayIndex={todayIndex} />}
    </TimelineWrapper>
  );
}

const TimelineWrapper = styled.div`
  position: relative;
  overflow-x: auto;
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  padding-bottom: 16px;
  background-color: ${colors.background};
  box-shadow: ${colors.shadow};
`;

const TodayHighlight = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  width: ${DAY_WIDTH}px;
  top: ${MONTH_HEIGHT}px;
  bottom: 0;
  left: ${(props) => props.$todayIndex * DAY_WIDTH}px;
  border: 3px solid ${colors.primary};
  border-radius: 4px;
  pointer-events: none;
`;
