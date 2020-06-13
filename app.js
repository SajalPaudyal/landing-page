const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
ready = document.getElementById('ready'),
work = document.getElementById('work');

function showTime(){
  let Today = new Date(),
  hour = Today.getHours(),
  min = Today.getMinutes(),
  sec = Today.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';


  hour =  hour%12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);


  function addZero(n){
    return(parseInt(n, 10) <10 ? '0' : '') + n;
  }
}

//setBackground using time

function setBackground(){
  let today  = new Date(),
  hour  = today.getHours();

  if(hour<12){
    //morning
    document.body.style.backgroundImage = "url('morning.jpg')";
    greeting.textContent = 'Good Morning ! Have a Good Day';
    document.body.style.color = 'white';
  }
  else if(hour<17){
    //afternoon
    document.body.style.backgroundImage = "url('afternoon.jpg')";
    greeting.textContent = 'Good Afternoon dear,';
    document.body.style.color = 'black';
  }
  else if(hour < 20){
    //evening
    document.body.style.backgroundImage = "url('evening.jpg')";
    greeting.textContent = 'Good Evening,';
  }
  else{
    //night
    document.body.style.backgroundImage = "url('night.jpg')";
    greeting.textContent = 'Good Night Buddy , Sleep well';
    document.body.style.color = 'white';
  }

}
function getName(){
  if (localStorage.getItem('name') === null) { 
    name.textContent = 'Enter Name';
  }
  else{
    name.textContent  = localStorage.getItem('name');
  }
}

function setName(e){
  if (e.type == 'keypress') {
    if (e.which == 13 || e.keyCode ==13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
      
    }
    
  }
  else{
    localStorage.setItem('name', e.target.innerText);
  }
}

function setWork(e){
  if(e.type == 'keypress'){
    if (e.which == 13 || e.keycode == 13){
      localStorage.setItem('work', e.target.innerText);
      work.blur();
    }
  }
    else{
      localStorage.setItem('work', e.target.innerText);
    }
 
}

function getWork(){
  if(localStorage.getItem('work')=== null){
    work.textContent = 'what are you doing today';
  }
  else{
    work.textContent = localStorage.getItem('work');
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

work.addEventListener('keypress', setWork);
work.addEventListener('blur', setWork);




setBackground();
showTime(); 
getName();
getWork();
