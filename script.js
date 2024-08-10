document.getElementById('submitcomt').addEventListener('click', (event) => {
  let element_commentList = document.getElementById('commentList');
  let new_li2 = document.createElement('li');
  new_li2.innerText = document.getElementById('commentInput').value; element_commentList.appendChild(new_li2);

});