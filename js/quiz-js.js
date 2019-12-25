function check(){
  
var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value; 
var correct=0;


    if (question1=="Green"||question1=="green" ){
        correct++;
  }


   if (question2=="right"){
       correct++;
  }  


  if (question3=="Brake"){
      correct++;
  }



var messages=["Great job!","That's just okay!","You really need to do better"];
var pictures=["https://i.pinimg.com/originals/0d/cd/6f/0dcd6f4e410a34465a2d611913199e50.gif","https://roobeedoo2.files.wordpress.com/2019/06/camera-1.gif","https://media.giphy.com/media/j5WNDiz8VRwhSWr3oW/giphy.gif"];

var range;

  if(correct<1){
      range=2;
  }
  
  if(correct>0&&correct<3){
      range=1;
  }
  
  if(correct>2){
      range=0;
  }
    



document.getElementById("after_submit").style.visibility="visible";


document.getElementById("messages").innerHTML=messages[range];
document.getElementById("number_correct").innerHTML="&rarr;you got "+correct+" correct.";
document.getElementById("pictures").src=pictures[range];


}


