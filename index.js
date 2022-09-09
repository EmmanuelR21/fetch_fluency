import fetch from "node-fetch"

//QUESTION 1
const logPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json())
        .then(json => console.log(`Title: ${json.title}\nPost: ${json.body}`));
}

// logPost(2);


//QUESTION 2
const logUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
        .then(json => json.forEach(e => {
            console.log(e.name);
        }))
}

// logUsers()


//QUESTION 3
const getBizUsers = () => {
    const bizArray = [];

    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json())
        .then(json => {
            json.forEach(e => {
                let email = e.email.split(".");
                if (email.includes("biz")) {
                    bizArray.push(email);
                }
            })
            console.log(bizArray)
        })
}

// getBizUsers()


//QUESTION 4
const longestPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json())
        .then(json => {
            let longest = -Infinity;
            let longestPost = "";
            json.forEach(e => {
                if (e.body.length > longest) {
                    longest = e.body.length;
                    longestPost = e.body;
                }
            })
            console.log(longestPost);
        });
}

// longestPost()


//QUESTION 5
const getCompletedTasks = () => {
    const completed = new Array();
    fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
        .then(json => {
            json.forEach(e => {
                if (e.completed === true) {
                    completed.push(e);
                }
            })
            console.log(completed);
        })
}

// getCompletedTasks()