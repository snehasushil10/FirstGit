//var item = document.querySelector('.list-group-item:nth-child(2)');
//item.style.backgroundColor ="green";
//var invi = document.querySelector('.list-group-item:nth-child(3)');
//invi.style.visibility ='hidden';
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
var col = document.querySelectorAll('.list-group-item');
col[1].style.color = "green";
