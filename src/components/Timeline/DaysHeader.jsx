import styled from "styled-components";
import { DAY_WIDTH } from "../../constants/sizes";
import { colors } from "../../constants/colors";
import { formatDay } from "../../utils/dateUtils";

export default function DaysHeader({ totalDays, dates }) {
  return (
    <DaysRow $totalDays={totalDays}>
      {dates.map((date) => (
        <DayCell key={date} title={date.toDateString()}>
          {formatDay(date)}
        </DayCell>
      ))}
    </DaysRow>
  );
}

const DaysRow = styled.div`
  display: flex;
  width: ${(props) => props.$totalDays * DAY_WIDTH}px;
`;

const DayCell = styled.div`
  box-sizing: border-box;
  width: ${DAY_WIDTH}px;
  height: ${DAY_WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${colors.primary};
  background: ${colors.primaryContrast};
  border-right: 1px solid ${colors.borders};
  &:last-child {
    border: none;
  }
`;
