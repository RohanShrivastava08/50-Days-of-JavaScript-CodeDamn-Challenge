console.log('JavaScript Date Object Lab')

//Create a new Date object called `currentDate` and log the current date and time
const currentDate = new Date();
console.log(currentDate);

//Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

//Create a function `getDayName` that takes a Date object and returns the day of the week as a string
function getDayName(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

//Export the `formatDate` function using ESM syntax
export { formatDate };