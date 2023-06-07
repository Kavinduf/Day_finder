const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const result = document.getElementById("result");
const getDay = document.getElementById("getDay");
console.log(date, month, year, result, getDay);

getDay.addEventListener("click", () => {
  let dateObj = new Date(`${date.value} ${month.value} ${year.value}`);
  console.log(dateObj);

  let day = dateObj.toString();
  day = day.slice(0, 3);

  if (day == "Sun") {
    day = "Sunday";
  }
  if (day == "Mon") {
    day = "Monday";
  }
  if (day == "Tue") {
    day = "Tuesday";
  }
  if (day == "Wed") {
    day = "Wednesday";
  }
  if (day == "Thu") {
    day = "Thursday";
  }
  if (day == "Fri") {
    day = "Friday";
  }
  if (day == "Sat") {
    day = "Saturday";
  }
  result.innerText = day;
});
