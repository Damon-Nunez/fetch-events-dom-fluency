function getPost(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))
}
function getUsers(){
    fetch(`https://jsonplaceholder.typicode.com/users/`)
  .then(response => response.json())
  .then(array => {
      const arrMap = array.map(obj => console.log(obj.name))
  })
}
function getAddresses(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(array => {
      const arrMap = array.map(obj => console.log(`${obj.address.street} , ${obj.address.suite} , ${obj.address.city}`))

  })
}
function shortestPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(array => {
    let shortestCount
    for(let i=0; i < array.length; i++){
      let SplitString = array[i].body.split("")
      if(SplitString.length < shortestCount){
        shortestCount = SplitString.length
      } 
    }
    console.log(array[shortestCountId])
  })
}
function numCompleted() {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(array => {
    let count = 0
    const arrMap = array.map(obj => {
      if(obj.completed === true ){
        count++
      }
    })
    console.log(count)
  })
}
function searchUsers(name){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(array => {
    const arrMap = array.map(obj => {
      if(obj.name === name){
        console.log(obj)
      } else {
        console.log("No Users Found")
      }
    })
  })
}
function searchPosts(searchWord){
  let searchWordPostsArray = []
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(array => {
    const arrMap = array.map(obj => {
      if(obj.body.includes(searchWord) === true){
        searchWordPostsArray.push(obj)
      }
    })
    console.log(searchWordPostsArray)
  })
}