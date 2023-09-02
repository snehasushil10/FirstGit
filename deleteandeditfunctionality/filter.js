/*var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
form.addEventListener('submit',description);
// Delete event
itemList.addEventListener('click', removeItem);

function description(e){
  e.preventDefault();
  var newItem1 = document.getElementById('description').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem1));
 itemList.appendChild(li);
}

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
//CREATE EDIT BUTTON
  var editbtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editbtn.className = 'btn btn-sm float-right';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editbtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editbtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
    });
}*/
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById('item').value;
  var newDescription = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  
  // Combine item name and description in a single line
  var itemText = document.createTextNode(newItem + ' - ' + newDescription);
  li.appendChild(itemText);

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to buttons
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-sm float-right';

  // Append text nodes
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append buttons to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input fields after adding
  document.getElementById('item').value = '';
  document.getElementById('description').value = '';
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(description){
        var itemName = description.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            description.style.display = 'block';
          } else {
            description.style.display = 'none';
          }
    });
}
