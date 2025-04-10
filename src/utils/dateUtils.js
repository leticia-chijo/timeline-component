function getDateRange(items) {
  const allDates = [];

  for (const item of items) {
    allDates.push(new Date(item.start));
    allDates.push(new Date(item.end));
  }

  const rawMin = new Date(Math.min(...allDates));
  const rawMax = new Date(Math.max(...allDates));

  const minDate = new Date(rawMin.getFullYear(), rawMin.getMonth(), 1);
  const maxDate = new Date(rawMax.getFullYear(), rawMax.getMonth() + 2, 0);

  return { minDate, maxDate };
}

export function daysBetween(d1, d2) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((d2 - d1) / msPerDay);
}

function getDatesInInterval(totalDays, minDate) {
  const dates = [];
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(minDate);
    d.setDate(minDate.getDate() + i);
    dates.push(d);
  }
  return dates;
}

function getMonthsInInterval(dates) {
  const months = [];
  let currentMonth = null;

  for (const date of dates) {
    const monthId = `${date.getFullYear()}-${date.getMonth()}`;

    if (!currentMonth || currentMonth.id !== monthId) {
      currentMonth = {
        id: monthId,
        label: formatMonth(date),
        days: [],
      };
      months.push(currentMonth);
    }
    currentMonth.days.push(date);
  }
  return months;
}

export function getIntervalValues(tasks) {
  const { minDate, maxDate } = getDateRange(tasks);
  const totalDays = daysBetween(minDate, maxDate);
  const dates = getDatesInInterval(totalDays, minDate);
  const months = getMonthsInInterval(dates);

  return { minDate, maxDate, totalDays, dates, months };
}

export function formatMonth(date) {
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
}

export function formatDay(date) {
  return date.getDate();
}

export function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
