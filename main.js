window.onload = init;
var StudentsUrl = 'http://localhost:3000/students';
function init() {
    loadStudents().then(renderStudents);
    var form = document.getElementById("addNew");
    form.addEventListener('submit', (event) => {
            event.preventDefault();
            AddNewStudent()
                .then(loadStudents)
                .then(renderStudents);
        })
}
function renderStudents(students){
    let studentElement = document.getElementById('template-student');
    let templateContent = studentElement.content.getElementById('post');
    let studentsList = document.getElementById('students');
    studentsList.innerHTML = '';
    for (let st of students) {
        let studentClone = templateContent.cloneNode(true);
        updateStudentElement(studentClone, st);
        studentsList.appendChild(studentClone);
    }
}

function loadStudents(){
    return fetch(StudentsUrl).then(response => response.json());
}

function AddNewStudent(){
let stName = document.getElementById("studentName").value;
let stKnowledge = document.getElementById("studentKnowledge").value;
return fetch(StudentsUrl, {
    method: "POST",
    body: JSON.stringify({name: stName,knowledge: stKnowledge}),
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
}

function updateStudentElement(element, st) {
    element.querySelector('h1').innerText = st.name;
    element.querySelector('p').innerText = st.knowledge;
}
