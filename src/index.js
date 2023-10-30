function updateLosAngelesTime() {
  let losAngelesElement = document.querySelector("#losAngeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("ddd, MMM D");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>] A[</small>]"
  );
}

setInterval(updateLosAngelesTime, 200);

function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("ddd, MMM D");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>] A[</small>]"
  );
}

setInterval(updateLondonTime, 200);

function updateBangkokTime() {
  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz("Asia/Bangkok");

  bangkokDateElement.innerHTML = bangkokTime.format("ddd, MMM D");
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "hh:mm:ss [<small>] A[</small>]"
  );
}

setInterval(updateBangkokTime, 200);

function updateSydneyTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("ddd, MMM D");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>] A[</small>]"
  );
}

setInterval(updateSydneyTime, 200);
