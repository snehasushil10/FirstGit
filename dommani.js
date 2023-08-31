//EXAMINE THE DOCUMENT OBJECTS
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent ="Hello";
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
//OR
var headertitle = document.getElementById('header-title');
//console.log(headertitle);
var header = document.getElementById('main-header');
header.style.borderBottom ="solid 3px #000";
var additem = document.getElementById('add');
//console.log(additem);
additem.style.fontWeight ="bold";
additem.style.color ="green";
