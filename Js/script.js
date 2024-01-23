let updateTime = function () {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dateInfo = new Date();

  document.getElementById("date").innerHTML =
    dayNames[dateInfo.getDay()] +
    " , " +
    dateInfo.getDate() +
    " " +
    monthNames[dateInfo.getMonth()] +
    " , " +
    dateInfo.getFullYear();

  let h = dateInfo.getHours();
  let m = dateInfo.getMinutes();
  let s = dateInfo.getSeconds();
  let day = h < 11 ? "AM" : "PM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  if (h == 0) {
    h = 0;
  } else if (h > 12) {
    h -= 12;
  } else {
    h;
  }
  document.getElementById("hours").innerHTML = h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s;
  document.getElementById("ampm").innerHTML = day;
};
let inter = setInterval(updateTime, 400);
