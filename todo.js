var listItems = [];

function addItem(){
    var temp = document.getElementById('new_item').value;
    if(temp){
        document.getElementById('init').innerHTML = '';
        document.getElementById('error').innerHTML = '';
        listItems.push(temp);
        displayList(temp);
        document.getElementById('new_item').value = null;
    }
    else{
        document.getElementById('error').innerHTML = 'Please enter the item';
    }
}

function displayList(item){
      document.getElementById('list').innerHTML+= '<input type="checkbox" class="checkbox">';
      document.getElementById('list').innerHTML+='<li class="item">'+item+'</li>';
}

