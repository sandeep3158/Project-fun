
function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    day = (day < 10) ? '0' + day : day;
    month = (day < 10) ? '0' + month : month;
    let DateStr = day + ':' + month + ':' + year;
    return DateStr;
}
function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hours = (hours < 10) ? '0' + hours : hours;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    let AM_PM = (hours < 12) ? 'AM' : 'PM';

    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 0 : hours;

    let Timestr = hours + ':' + min + ':' + sec + ' ' + AM_PM;
    return Timestr;
}
setInterval(function () {
    document.getElementById("date").innerHTML = getDate();
    document.getElementById("time").innerHTML = getTime();
}, 1000);

document.getElementById('icon').onclick = () =>{
    document.body.classList.toggle('dark-mode');
}




