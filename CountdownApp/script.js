const days_html = document.getElementById("days");
const hours_html = document.getElementById("hours");
const minutes_html = document.getElementById("minutes");
const seconds_html = document.getElementById("seconds");
const date_html = document.getElementById("title_date");

function calcDiff(){
    const string_date = "01 01 2022"
    const new_years_date = new Date(string_date);
    const today_date = new Date();
    const diff = new_years_date - today_date;
    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = Math.floor(hours / 24);
    const hours_left = Math.floor(hours % 24);
    const mins_left = Math.floor(minutes % 60);
    const secs_left = Math.floor(seconds % 60);

    days_html.innerHTML = days;
    hours_html.innerHTML = formatTime(hours_left);
    minutes_html.innerHTML = formatTime(mins_left);
    seconds_html.innerHTML = formatTime(secs_left);

    
    date_html.innerHTML = 'Saturday, 01 January 2022';


    function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
    }
}

setInterval(calcDiff, 1000);