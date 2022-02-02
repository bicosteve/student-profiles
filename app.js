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
  const studentDetail = event.target.parentElement.parentElement.parentElement;
  const studentMarks = studentDetail.querySelector(".students_marks");

  if (event.target.classList.contains("marks_toggle")) {
    if (event.target.classList.contains("fa-plus")) {
      event.target.classList.remove("fa-plus");
      event.target.classList.add("fa-minus");
      studentMarks.style.display = "block";
    } else if (event.target.classList.contains("fa-minus")) {
      event.target.classList.add("fa-plus");
      event.target.classList.remove("fa-minus");
      studentMarks.style.display = "none";
    }
  }
});

initApp();
search();
