/*------------------------------------------------------------------------------------------------------------------------
 @package: UTCtoLocalJS

 @author: Brock
 @www: 0xbrock.github.io

 @copyright: COPYRIGHT 4 Brock
 @license: MIT

 =============================================================================
 Filename: main.js
 =============================================================================
 This file is the main entry point for js on the UTCtoLocalJS app.
 --------------------------------------------------------------------------------------------------------------------- */

 function UtcTimesToLocal() {
   $("time").each(function (index, element) {
    var el = $(element),
     time = el.attr("datetime"),
     converted = new Date(time);
     console.log(time);
    var dateString = ToDateString(converted);
    el.text(dateString);
   });
}

function ToDateString(dateObj) {
  var curr_year = dateObj.getFullYear(),
  curr_month = LeadingZero(dateObj.getMonth() + 1),
  curr_date = LeadingZero(dateObj.getDate()),
  curr_hour = LeadingZero(dateObj.getHours()),
  curr_min = LeadingZero(dateObj.getMinutes()),
  curr_sec = LeadingZero(dateObj.getSeconds()),
  curr_ampm = "AM";
 if (curr_hour > 11) {
  curr_ampm = "PM";
  curr_hour = (curr_hour == 12) ? 12 : curr_hour - 12;
 }
 var timestamp = curr_year + "-" + curr_month + "-" + curr_date + " " + curr_hour + ":" + curr_min + ":" + curr_sec + " " + curr_ampm + " " + LocalTimeZone();
 return timestamp;
}

function LeadingZero(val) {
 return (val < 10) ? "0" + val : val;
}

function LocalTimeZone () {
  // From http://stackoverflow.com/questions/2897478/get-client-timezone-not-gmt-offset-amount-in-js
  var now = new Date().toString(),
      timezone = now.indexOf('(') > -1 ?
        //now.match(/\([^\)]+\)/)[0] :  // Uncomment this line to return the full time zone text
        now.match(/\([^\)]+\)/)[0].match(/[A-Z]/g).join('') :  // Uncomment this line to return the full time zone abbreviation
        now.match(/[A-Z]{3,4}/)[0];
  if (timezone == "GMT" && /(GMT\W*\d{4})/.test(now))
    timezone = RegExp.$1;
  return timezone;
}
