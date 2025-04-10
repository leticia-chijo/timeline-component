import styled from "styled-components";
import { DAY_WIDTH } from "../../constants/sizes";
import { colors } from "../../constants/colors";
import { TaskLane } from "./TaskLane";

export default function ContentGrid({ tasksInLanes, minDate, totalDays, dates }) {
  return (
    <>
      {tasksInLanes.map((lane, laneIndex) => (
        <LaneContainer key={`lane-${laneIndex}`}>
          <GridOverlay $totalDays={totalDays}>
            {dates.map((_, i) => (
              <GridLine key={`grid-${i}`} />
            ))}
          </GridOverlay>

          <TimelineRow $totalDays={totalDays}>
            {lane.map((item) => (
              <TaskLane key={`item-${item.id}`} item={item} minDate={minDate} />
            ))}
          </TimelineRow>
        </LaneContainer>
      ))}
    </>
  );
}

const LaneContainer = styled.div`
  position: relative;
  padding: 8px 0 0 0;
  height: ${DAY_WIDTH}px;
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  min-width: ${(props) => props.$totalDays * DAY_WIDTH}px;
  height: calc(100% + 16px);
`;

const GridLine = styled.div`
  box-sizing: border-box;
  width: ${DAY_WIDTH}px;
  border-right: 1px solid ${colors.borders};
`;

const TimelineRow = styled.div`
  position: relative;
  height: ${DAY_WIDTH}px;
  min-width: ${(props) => props.$totalDays * DAY_WIDTH}px;
`;
