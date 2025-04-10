import styled from "styled-components";
import { DAY_WIDTH } from "../../constants/sizes";
import { colors } from "../../constants/colors";
import { daysBetween } from "../../utils/dateUtils";

export function TaskLane({ item, minDate }) {
  const startDate = new Date(item.start);
  const endDate = new Date(item.end);

  const offset = daysBetween(minDate, startDate) + 1;
  const duration = daysBetween(startDate, endDate) + 1;

  return (
    <LaneBlock
      key={`item-${item.id}`}
      title={`${item.name}: ${item.start} → ${item.end}`}
      $offset={offset}
      $duration={duration}
    >
      <Text>{duration === 1 ? "..." : item.name}</Text>
    </LaneBlock>
  );
}

const LaneBlock = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: ${(props) => props.$offset * DAY_WIDTH}px;
  width: ${(props) => props.$duration * DAY_WIDTH - 2}px;
  height: ${DAY_WIDTH}px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: ${colors.secondary};
  box-shadow: ${colors.shadow};
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
    background-color: ${colors.secondaryDark};
    font-weight: 600;
  }
`;

const Text = styled.span`
  box-sizing: border-box;
  width: 100%;
  padding: 4px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  text-align: center;
  color: ${colors.secondaryContrast};
  user-select: none;
`;
