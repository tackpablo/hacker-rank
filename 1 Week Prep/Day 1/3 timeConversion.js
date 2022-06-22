/////////////////////////
// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one
/////////////////////////

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    // time is equal to only the numerical values, split at colons
    const time = s.slice(0, 8).split(":");

    // if hours is 12, converted it is 00
    if (time[0] == "12") time[0] = "00";
    // if the period is pm, conver the hours to number and add 12
    if (s.slice(8) == "PM") time[0] = parseInt(time[0]) + 12;

    return time.join(":");
}
