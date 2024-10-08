export const formatDate = (date) => {
    const newDate = new Date();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    return `${day}-${month}-${year}`;
};