function daysInMonth(year, month) {
  const d = new Date(year, month, 0);
  return d.getDate();
}

function firstDayOfMonth(year, month) {
  const d = new Date(year, month - 1, 1);
  return d.getDay();
}

function getCurrentYear() {
  return new Date().getFullYear();
}

function getCurrentMonth() {
  return new Date().getMonth() + 1;
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export {
  daysInMonth,
  firstDayOfMonth,
  getCurrentYear,
  getCurrentMonth,
  weekdays,
};
