'use strict';
let newObject;
let arrofObjet=[];
let formEl =document.getElementById('form');
let list =document.getElementById('divUl');
let tableEl=document.createElement('table');
let arr=[];

function Student(name,nameClass){
this.name =name;
this.class =nameClass;
arrofObjet.push(this);
}
Student.prototype.rendertable=function(){
    
         let trEl2 =document.createElement('tr');
         tableEl.appendChild(trEl2);
         let tdEl1=document.createElement('td');
             trEl2.appendChild(tdEl1);
             tdEl1.textContent=this.name;
         let tdEl2=document.createElement('td');
             trEl2.appendChild(tdEl2);
             tdEl2.textContent=this.class;
   
   }
Student.prototype.render=function(){
    arr=JSON.parse(localStorage.getItem('AllStudent'));
  let ulEl=document.createElement('ul');
  list.appendChild(ulEl);
 
  let liEl;
//   ulEl.textContent='';
// liEl =document.createElement('li');
//      ulEl.appendChild(liEl);
//      liEl.textContent=`${newObject.name} && ${newObject.class}`;
liEl =document.createElement('li');
  for(let i=0;i<arr.length;i++){
     ulEl.appendChild(liEl);
     liEl.textContent=`${arr[i].name} && ${arr[i].class}`;
}
   //  liEl.textContent=`${this.name} && ${this.class}`
 
}
Student.prototype.saveToLocal=function(){
   
     localStorage.setItem('AllStudent',JSON.stringify(arrofObjet));
}
// Student.prototype.saveToLocal=function(){
   
//      localStorage.setItem('AllStudent',JSON.stringify(newObject));
// }

// Coffee.drinks = [];

function headeer(){
    
     list.appendChild(tableEl);
     let trEl1 =document.createElement('tr');
     tableEl.appendChild(trEl1);
     let thEl1 =document.createElement('th');
         trEl1.appendChild(thEl1) ;
         thEl1.textContent='Name';
         let thEl2 =document.createElement('th');
         trEl1.appendChild(thEl2) ;
         thEl1.textContent='Class Name';
}



// console.log(arrofObjet);



headeer(); 
formEl.addEventListener('submit',myFun);
function myFun(e){
e.preventDefault();
let name =document.getElementById('namefeild').value; 
let className = e.target.classfeild.value;
 
 newObject = new Student(name,className);
 newObject.saveToLocal();
//  let order = JSON.stringify(Student.drinks);
//  localStorage.setItem('AllOrders', newObject);

 newObject.rendertable();
 newObject.render();

//  console.log(arrofObjet);
}


// function save(){
// }
// JSON.parse('student');
// myFun();
// console.log(arrofObjet);

