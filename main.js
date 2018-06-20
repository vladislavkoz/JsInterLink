window.onload = init;
var postUrl = 'http://localhost:3000/students';
function init() {
    loadPosts().then(renderPost);
}
function renderPost(post){
    let postElement = document.getElementById('template-student');
    let templateContent = postElement.content.getElementById('post');
    let studentsList = document.getElementById('students');
    for (let st of post) {
        let postClone = templateContent.cloneNode(true);
        updatePostElement(postClone, st);
        studentsList.appendChild(postClone);
    }
}

function loadPosts(){
    return fetch(postUrl).then(response => response.json());
}

function updatePostElement(element, st) {
    element.querySelector('h1').innerText = st.name;
    element.querySelector('p').innerText = st.knowledge.toString();
}
