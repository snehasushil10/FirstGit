//PARENTELEMENT
/*var itemlist = document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemlist.parentElement.parentElement.parentElement);

//LASTELEMENTCHILD
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='Hello 4';
//FIRSTCHILD
console.log(itemlist.lastChild);

//FIRSTELEMENTCHILD
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='Hello 1';
//FIRSTCHILD
console.log(itemlist.firstChild);

//NEXTSIBLING
/*console.log(itemlist.nextSibling);
//NEXTELEMENTSIBLING
console.log(itemlist.nextElementSibling);

//PREVIOUSSIBLING
console.log(itemlist.previousSibling);
//PREVIOUSELEMENTSIBLING
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color="green";

//CREATEELEMENT
var newDiv = document.createElement('div');
//ADD CLASS
newDiv.className ='hello';
//ADD ID
newDiv.id = 'hello 1';

//SETATTRIBUTE
newDiv.setAttribute ('title','hellodiv');

//CREATETEXTNODE
var newDivtext = document.createTextNode('Hello World');

//APPENDCHILD
newDiv.appendChild(newDivtext);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);*/
var newDiv1 = document.createElement('div');
var newtext = document.createTextNode('Hello');
newDiv1.appendChild(newtext);
var word = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv1);
word.insertBefore(newDiv1,h1);

var newDiv2 = document.createElement('div');
var newtext1 = document.createTextNode('Hello');
newDiv2.appendChild(newtext1);
var list = document.getElementById("items");
list.insertBefore(newDiv2,list.children[0]);