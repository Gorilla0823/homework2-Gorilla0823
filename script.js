// TODO(you): Write the JavaScript necessary to complete the homework.
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

const chooses = document.querySelectorAll('section div');
const show= document.querySelector('.hidden');
var answer={one:'',two:'',three:''};

for(const choose of chooses){
	choose.addEventListener('click',selection);
}
const restartButton= document.querySelector('button');
 restartButton.addEventListener('click',restart);
function selection(event){
  const select=event.currentTarget;
   let choice=select.dataset.choiceId;
   let question=select.dataset.questionId;
  for(let choose of chooses){
  	 let ID0=choose.dataset.questionId;
  	 let ID1=select.dataset.questionId;
  	 if(ID0===ID1){
  	 	choose.classList.add('unselected');
        choose.querySelector('.checkbox').src="images/unchecked.png";
  	 }
  }
  select.classList.replace('unselected','selected');
  select.querySelector('.checkbox').src="images/checked.png";
  answer[question]=choice;
  
  if(answer['one']!==''&&answer['two']!==''&&answer['three']!==''){ 
    result();	
  	for(let choo of chooses){
    	choo.removeEventListener('click',selection);
    }
  }
}
function result(){
 	var solution={blep:0,happy:0, sleeping:0, 
 			     dopey:0,burger:0, cart:0, 
 			     nerd:0, shy:0, sleepy:0};
    var finalanswer='';
    solution[answer['one']]++;
    solution[answer['two']]++;
    solution[answer['three']]++;
    if(solution[answer['one']]===1&&solution[answer['two']]===1&&solution[answer['three']]===1)
      finalanswer=answer['one'];
    else if(solution[answer['one']]>1)
    	 finalanswer=answer['one'];
    else if(solution[answer['two']]>1)
    	 finalanswer=answer['two'];
    else if(solution[answer['three']]>1)
    	 finalanswer=answer['three'];
    console.log(finalanswer);
    show.classList.remove('hidden');    
    document.getElementById('title').innerHTML+='You got: '+RESULTS_MAP[finalanswer].title;
    document.getElementById('contents').innerHTML+=RESULTS_MAP[finalanswer].contents;
    document.getElementById('rb').innerHTML='Restart quiz';
 }
function restart(){
	for(const choose of chooses){
	choose.addEventListener('click',selection);
   }
	answer={one:'',
	two:'',three:''};
	for(let choose of chooses){
		choose.classList.remove('selected');
		choose.classList.remove('unselected');
		choose.querySelector('.checkbox').src="images/unchecked.png";
	}  
	show.classList.add('hidden');
	document.getElementById('title').innerText='';
	document.getElementById('contents').innerText='';
	document.getElementById('rb').innerText='';
   	document.querySelector('article').scrollIntoView({behavior:"auto"});
}
