function check(){
var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var correct=0;
if (question1=="tehran"||  question1=="Tehran"){
    correct++
}
if(question2=="Beijing"){
    correct++
}
if(question3=="Ottawa"){
    correct++
}
var message=["Greatjob!","This is just ok!","You really need to do better!"]
var gif=["../statics/gif/succes.gif","../statics/gif/mehgif.gif","../statics/gif/failed.gif"]

var range;
if (correct<1){
    range=2;
}
if (correct>0 &&correct<3){
    range=1;
}
if (correct>2){
    range=0;
}

    document.getElementById("aftersubmit").style.visibility="visible"
    document.getElementById("message").innerHTML=message[range];
    document.getElementById("number_correct").innerHTML="You Got This"+correct+"correct";
document.getElementById("gif").src=gif[range];

}