/*Menu*/

function clickMenu() {
    if(menu.style.display == "block"){
        menu.style.display = "none"
    }else {
        menu.style.display = "block"
    }
}

function changeMenu() {
    if(window.innerWidth >= 768){
        menu.style.display ="block"
    }else {
        menu.style.display ="none"
    }
}

//  date and time

 
 const timeElement = document.querySelector("#time");
 const dateElement = document.querySelector("#date");
 
 
 function formatTime(date) {
   const hours12 = date.getHours() 
   const minutes = date.getMinutes()
   const seconds = date.getSeconds();
 
   return `${hours12.toString().padStart(2, "0")}:${minutes.toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
 }
 
 
 function formatDate(date) {
   const DAYS = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
   ];
   const MONTHS = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December"
   ];
 
   return `${DAYS[date.getDay()]}, ${
     MONTHS[date.getMonth()]
   } ${date.getDate()} ${date.getFullYear()}`;
 }
 
 setInterval(() => {
   const now = new Date();
 
   timeElement.textContent = formatTime(now);
   dateElement.textContent = formatDate(now);
 }, 1000);
 
