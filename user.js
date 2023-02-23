document.getElementById('display-user').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
})

function displayUser(users){
    const ul = document.getElementById('user-list'); 
    for(const user of users){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}