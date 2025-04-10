import styled from "styled-components";
import { DAY_WIDTH, MONTH_HEIGHT } from "../../constants/sizes";
import { colors } from "../../constants/colors";

export default function MonthsHeader({ totalDays, months }) {
  return (
    <MonthsRow $totalDays={totalDays}>
      {months.map((month) => (
        <MonthCell key={month.id} $monthDays={month.days.length}>
          {month.label}
        </MonthCell>
      ))}
    </MonthsRow>
  );
}

const MonthsRow = styled.div`
  display: flex;
  width: ${(props) => props.$totalDays * DAY_WIDTH}px;
  border-radius: 12px 12px 0 0;
`;

const MonthCell = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.$monthDays * DAY_WIDTH}px;
  height: ${MONTH_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${colors.primaryContrast};
  background: ${colors.primary};
  border-right: 1px solid ${colors.borders};
  &:last-child {
    border: none;
  }
`;
