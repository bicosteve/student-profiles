const searchForm = document.getElementById("searchForm");
const searchTerm = document.getElementById("searchTerm");
const studentContent = document.querySelector(".student_content");

const students = new API();
const ui = new UI();

function initApp() {
  students
    .getStudent()
    .then((data) => {
      //console.log(data);
      ui.getStudents(data.students);
    })
    .catch((error) => console.log(error));
}

function search() {
  searchForm.addEventListener("keyup", (event) => {
    if (searchTerm.value && searchTerm.value !== "") {
      students
        .getStudent()
        .then((data) => ui.searchStudent(data.students, searchTerm.value));
    } else {
      return;
    }
    event.preventDefault();
  });
}

studentContent.addEventListener("click", (event) => {
  if (event.target.classList.contains("marks_toggle")) {
    event.target.classList.remove("fa-plus");
    event.target.classList.add("fa-minus");
  }

  const ul = studentContent.querySelector("ul");
  console.log(ul);
});

initApp();
search();
