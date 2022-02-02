class UI {
  constructor() {
    this.studentContent = document.querySelector(".student_content");
  }

  getStudents = (students) => {
    let html = "";
    return students.forEach((student) => {
      const { company, email, firstName, grades, id, lastName, pic, skill } =
        student;

      const average =
        grades.reduce(
          (total, current) => parseInt(total) + parseInt(current),
          0
        ) / grades.length;

      html = `
      <div id="${id}" class="student_container">
      <div class="image_container">
        <img src="${pic}" alt="${firstName}" />
      </div>
      <div class="student_details">
        <h5>${firstName.toUpperCase()}  ${lastName.toUpperCase()}</h5>
        <ul class="student_detail_list">
          <li class="student__details-item">Email - ${email}</li>
          <li class="student__details-item">Company - ${company}</li>
          <li class="student__details-item">Skill - ${skill}</li>
          <li class="student__details-item">Average - ${average.toFixed(
            2
          )}%</li>
        </ul>
      </div>
    </div> 
      `;
      this.studentContent.innerHTML += html;
    });
  };

  searchStudent = (students, term) => {
    this.studentContent.innerHTML = "";
    let html = "";

    const filteredStudent = students.filter((student) => {
      return (
        student.firstName.toLowerCase().includes(term.toLowerCase()) ||
        student.lastName.toLowerCase().includes(term.toLowerCase())
      );
    });

    return filteredStudent.forEach((stud) => {
      const { company, email, firstName, grades, id, lastName, pic, skill } =
        stud;

      const average =
        grades.reduce(
          (total, current) => parseInt(total) + parseInt(current),
          0
        ) / grades.length;

      html = `
      <div id="${id}" class="student_container">
          <div class="image_container">
            <img src="${pic}" alt="${firstName}" />
          </div>
          <div class="student_details">
            <h5>${firstName.toUpperCase()}  ${lastName.toUpperCase()}</h5>
            <ul class="student_detail_list">
              <li class="student__details-item">Email - ${email}</li>
              <li class="student__details-item">Company - ${company}</li>
              <li class="student__details-item">Skill - ${skill}</li>
              <li class="student__details-item">Average - ${average.toFixed(
                2
              )}%</li>
            </ul>
          </div>
    </div>`;
      this.studentContent.innerHTML += html;
    });
  };
}
