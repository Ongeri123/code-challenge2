let name = document.getElementById('username');

let list = document.getElementById('guestList');

let buttonReaction = document.getElementById('add-guest');



buttonReaction.addEventListener ('click', (e) => {
  e.preventDefault();

  if(name.value.trim() ===''){
    alert('Input a name')
    return;
  }

   if (list.children.length>=10){
    alert('You have exceeded the limit of 10 guests')
    name.value = '';
    return ;
  }
 let li = document.createElement('li');
 li.textContent = name.value;

 let removeBtn = document.createElement('button')
 removeBtn.className = 'remove-button';
 removeBtn.textContent = 'Remove';
 removeBtn.style.marginLeft = "10px";

let rsvpSelect = document.createElement('select');

let optionList = [
  '--RSVP--',
  'Attending',
  'Not Attending'];

  optionList.forEach (optionText =>{
  let option = document.createElement('option');
  option.value = optionText;
  option.textContent = optionText;

  rsvpSelect.appendChild(option);
})

 li.appendChild(removeBtn);
 li.appendChild(rsvpSelect);

 list.appendChild(li)

 name.value = '';


})



list.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const li = e.target.closest('li');
    li.remove();
  }

  function handleAddGuest (e){

   
  }
})  