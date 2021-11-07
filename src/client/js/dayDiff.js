export function dayDiffrence(day1, day2) {

    // Get Argument's Time
    let dTime1 = new Date(day1).getTime();
    let dTime2 = new Date(day2).getTime();

    // Total Milliseconds in A Day
    const dayInMs = 24*60*60*1000;

    // Return Day Difference Between Two Dates
    return parseInt((dTime2 - dTime1) / dayInMs);

}