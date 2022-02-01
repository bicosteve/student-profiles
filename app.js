const searchBar = document.getElementById("searchBar");

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

//filter students
console.log(searchBar);
searchBar.addEventListener("onkeyup", function (event) {
  console.log(event);
});

init();
