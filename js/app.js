'use strict';
let newObject;
let arrofObjet=[];// Create array to put all objects are created in it
let formEl =document.getElementById('form');
let list =document.getElementById('divUl');
let tableEl=document.createElement('table');
let arr=[];//to put data is comming from local storage

//create constructor function 
function Student(name,nameClass){
this.name =name;
this.class =nameClass;
arrofObjet.push(this);//put all ojects in array has name (arrofobject)
}
//render data from form to table
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
//save data from form to local storage
Student.prototype.saveToLocal=function(){
        localStorage.setItem('Allstudent',JSON.stringify(arrofObjet))
   }
//render data from local storage to list
Student.prototype.render=function(){ 
 arr=JSON.parse(localStorage.getItem('Allstudent'));//get data from local storag && put it in arr
  let ulEl=document.createElement('ul');
  list.appendChild(ulEl);
  let liEl;
liEl=document.createElement('li')
for(let i =0 ;i<arr.length;i++){
     ulEl.appendChild(liEl);
     liEl.textContent=`${arr[i].name} && ${arr[i].class}`  
} }
//header of table to show one time
function header(){
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

header();//invoke header function
formEl.addEventListener('submit',myFun);//add event for form

//in myFunwhat happend when i click on submit
function myFun(e){
e.preventDefault();
let name =document.getElementById('namefeild').value; 
let className = e.target.classfeild.value;
 
newObject = new Student(name,className);
newObject.saveToLocal();
 newObject.rendertable();
 newObject.render();
}


