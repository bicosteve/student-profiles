const searchForm = document.getElementById("searchForm");
const searchTerm = document.getElementById("searchTerm");

const students = new API();
const ui = new UI();

function init() {
  students
    .getStudent()
    .then((data) => {
      ui.getStudents(data.students);
    })
    .catch((error) => console.log(error));
}

init();

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
