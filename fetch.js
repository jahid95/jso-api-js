function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(data){
    console.log(data);
}