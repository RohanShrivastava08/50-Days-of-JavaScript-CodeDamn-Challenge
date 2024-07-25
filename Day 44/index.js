/*
 * Implement your fetchData and processData functions below
 *
 */

/* Do not modify below this line */

export const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('data fetched!');
        }, 1000);
    });
}

export const processData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${data} - processed!`);
        }, 1000);
    });
}
