import styled from "styled-components";
import timelineItems from "./timelineItems";
import Timeline from "./components/Timeline";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(timelineItems);

  return (
    <ScreenContainer>
      <h2>Timeline Overview ✨</h2>
      <h3>{timelineItems.length} timeline items</h3>

      <Timeline data={tasks} />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
