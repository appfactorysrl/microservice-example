export function getCurrentTime() {
    let time = new Date().toISOString();
    console.log("now returning current time", time);
    return time;
}
