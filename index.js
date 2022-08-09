function counter(){

  const second=1000;
  const minute=second*60;
  const hour=minute*60;
  const day=hour*24;

  let today=new Date(),
      dd=String(today.getDate()).padStart(2,"0"),
   mm=String(today.getMonth()+1).padStart(2,"0") ,
    yyyy=today.getFullYear(),
    nextyear=yyyy+1,
    dayMonth=document.getElementById("birthday").value,
      birthday=dayMonth+yyyy;

  today=mm+"/"+dd+"/"+yyyy;
  if(today>birthday){
    birthday=dayMonth+nextyear;
  }



  const  countDown=new Date(birthday).getTime(),
          x=setInterval(function(){
            const now=new Date().getTime(),
              dif=countDown-now;
              document.getElementById("submit").style.visibility="hidden";
              document.getElementById("countdown").style.visibility="visible";
            document.getElementById("days").innerText=Math.floor(dif/(day)),
              document.getElementById("hours").innerText=Math.floor((dif%(day))/(hour)),
               document.getElementById("minutes").innerText=Math.floor((dif%(hour))/(minute)),
              document.getElementById("seconds").innerText=Math.floor((dif%(minute))/second);
              document.getElementById("celebration").style.visibility="visible";
              document.getElementById("birthday").style.visibility="collapse";
            if(dif<0){
              document.getElementById("heading").innerText="Its my birthday!";
              document.getElementById("countdown").style.visibility="hidden";
              clearInterval(x);
            }
          },0)
  };
