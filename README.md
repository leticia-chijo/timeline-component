# Timeline Component

A timeline component built with `react` and `styled-components`. It displays tasks over a date range, grouped by rows (or lanes), with headers for months and days.

![Timeline Preview](public/assets/timeline.gif)

## How to Run
- Clone repository
- On root directory, run `npm install`
- After installing dependencies, run `npm start`

## What I Like About My Implementation

- The layout is divided into reusable components.

- The date utility functions make it easy to adjust the date range dynamically, and since they are functions specifically created for this project, they are also customizable.

- The layout is easy to understand and responsive. It also has an overlay that highlights the current day on the timeline.

## What I Would Change If I Did It Again

- Improve the layout of the scrollbar in the Timeline component, as it is a bit disruptive currently.

- Think about some virtualization technique to avoid rendering all days at once.

- Improve accessibility by adding some sort of keyboard navigation and ARIA support. As is, it has some explanatory text available on tooltips, but can be improved.

- Add other features: I thought about showing a personalized tooltip to change the task's title and color by clicking on it. Also, the suggested additions such as zoom and drag and drop to change date are very good ones, but I don't think I'd be able to do them in under 4 hours.

## Design Decisions

- I was inspired by [Lumeer's](https://www.lumeer.io/using-timelines-view/) layout for this timeline. Even though mine is very different, the idea of thin colored lanes and a vertical grid to show time progression are the same.

- I used `styled-components` for its ability to do conditional rendering easily. 

- I avoided using libraries to keep dependencies light and have easy to change functions.

- Since I didn't think I'd be able to add a lot in the timeframe I had, I decided to make an implementation that shows everyday on every month and decided to show the whole month from when the first task started to when the last task ended.

## How I Would Test This If I Had More Time

- I would create unit tests for all utility functions with a tool like `react-testing-library`.

- I could try to make integration tests to check if tasks render in the correct lanes and positions based on start and end dates, as well as in edge cases such as overlapping tasks, single-day tasks and empty data.