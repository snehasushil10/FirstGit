//var items = document.getElementsByClassName('list-group-item');
//console.log(items)
//for(var i=0;i<items.length;i++)
//{
  //  items[i].style.backgroundColor= 'green';
//}

var li = document.getElementsByTagName('li');
console.log(li)
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor= 'green';
}
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';