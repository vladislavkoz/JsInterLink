window.onload = init;

function init() {
    var student1 = {name: "student1", knowledge: 4};
    var student2 = {name: "student2", knowledge: 12};
    var student3 = {name: "student3", knowledge: 5};
    var students = [student1, student2, student3];
    let postElement = document.getElementById('template-student');
    let post = postElement.content.getElementById('post');
    let studentsList = document.getElementById('students');
    for (let st of students) {
        let postClone = post.cloneNode(true);
        updatePostElement(postClone, st);
        studentsList.appendChild(postClone);
    }
}

function updatePostElement(element, st) {
    element.querySelector('h1').innerText = st.name;
    element.querySelector('p').innerText = st.knowledge.toString();
}
