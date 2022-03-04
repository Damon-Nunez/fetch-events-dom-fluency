# Code Fluency: Fetch API + Asynchronous HTTP Requests

## Directions
For the following questions, use the [JSON Placeholder API](https://jsonplaceholder.typicode.com). Take your time combing through the documentation and all URL endpoints. You can make GET requests through the browser!
```
  GET all 100 posts       https://jsonplaceholder.typicode.com/posts
  GET all 200 todos       https://jsonplaceholder.typicode.com/todos
  GET all 10 users        https://jsonplaceholder.typicode.com/users
  GET a single post       https://jsonplaceholder.typicode.com/posts/{id}
```

## Fetch Fluency

Write your solutions to the problem in `app.js`. Test your solutions by opening up the `index.html`,  viewing the console, and invoking the functions.

1. Write a function, `getPost`, that takes in an integer (`id`) argument and makes a GET request to the correct URL and console logs a parsed JSON **object** that corresponds to the post with the given `id`:
  ```js
  getPost(2);
  /* prints
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
  */

  getPost(50);
  /* prints 
  {
    userId: 5,
    id: 50,
    title: "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
    body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
  }
  */
  ```

2. Write a function, `getUsers`, that makes a GET request to the correct URL and console logs an **array** of the first and last names of all ten users (just the first and last name, and no other information).

3. Write a function, `getAddresses`, that console logs an **array** of all user addresses. Addresses should be formatted as comma separated strings containing the `"street"`, `"suite"`, and `"city"` in that order.

4. Write a function, `shortestPost`, that console logs the post **object** with the shortest body.

5. This database has 200 `todos`. Write a function called `numCompleted` console logs the **number** of tasks that are marked complete.

6. Write a function called `searchUsers` that takes a string argument (`name`) and console logs the user **object** for the user that has that name. If no user is found, then console log "No User Found".

7. Write a function called `searchPosts` that takes a string argument (`searchWord`) and console logs an **array** containing all of the posts objects that have the search word in the body of the post.


## Events Fluency

Now it's time to hook your fetch methods up to an event. Create your HTML tags in `index.html`. Then, in your `app.js` use the corrent DOM methods to select the correct HTML element and add your event listeners.  

1. Create a "Get Post" form with a number input and a submit button. The form should have a min value of 1 and a max value of 100. When you submit the form, call the `getPost` function which will log that post object to the console.

2. Create a "Get Users" button. When clicked, the button should call the `getUsers` function which will log an array of the first and last names of all ten users.

3. Create a "Get Addresses" button. When clicked, the button should call the `getAddresses` function which will log an array of all user addresses.

4. Create a "Get Shortest Post" button. When clicked, the button should call the `shortestPost` function which will log the post object with the shortest body.

5. Create a "Get Number of ToDo's" button. When clicked, the button should call the `numCompleted` function which will log the number of tasks that are marked complete.

6. Create a "Search Users" form with a text input and a submit button. The form should call the `searchUsers` function which will console logs the user object. You should be passing in the input value as the argument. 

7. Create a "Search Posts" form with a text input and a submit button. The form should call the `searchPosts` function which will console logs an array containing all of the posts objects that have the search word in the body of the post. You should be passing in the input value as the argument. 

## DOM Manipulation Fluency

For all of the above problems, append the information to the DOM instead of logging the data to the console! You will need to be mindful of what datatype you are working with (objects or arrays)! **DO NOT** just append the object or array to the DOM. You should be parsing through the information and creating a `p`, `li`, `span` or `div` element for Every. Single. Piece of information in your objects or arrays. 
