const students = new API();
const ui = new UI();

students
  .getStudent()
  .then((data) => {
    console.log(data.students);
    ui.getStudents(data.students);
  })
  .catch((error) => console.log(error));
