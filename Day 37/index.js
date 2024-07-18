function convertTo24HrsFormat(time) {
    // Extract hour, minute, and period (AM/PM) from the time string
    let [hour, minutePeriod] = time.split(':');
    let minute = minutePeriod.slice(0, 2);
    let period = minutePeriod.slice(2).toUpperCase();

    hour = parseInt(hour);

    if (period === 'PM' && hour !== 12) {
        hour += 12;
    } else if (period === 'AM' && hour === 12) {
        hour = 0;
    }

    // Format hour to have two digits
    hour = hour.toString().padStart(2, '0');

    return `${hour}:${minute}`;
}

console.log(`Converted time: ${convertTo24HrsFormat("1:45PM")}`); // Output should be '13:45'
console.log(`Converted time: ${convertTo24HrsFormat("03:45PM")}`); // Output should be '15:45'
