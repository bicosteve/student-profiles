class UI {
  constructor() {
    this.studentContent = document.querySelector(".student_content");
  }

  loopGrade = (arr) => {
    return arr
      .map((item, index) => {
        let number = 1 + index;
        return `<li class="marks__list-item">Test${number} -  ${item}%</li>`;
      })
      .join("");
  };

  getStudents = (students) => {
    let html = "";
    return students.map((student) => {
      const { company, email, firstName, grades, id, lastName, pic, skill } = student;

      const average =
        grades.reduce((total, current) => parseInt(total) + parseInt(current), 0) /
        grades.length;

      html = `
        <div id="${id}" class="student_container">
              <div class="image_container">
                <img src="${pic}" alt="${firstName}" />
              </div>
              <div class="student_details">
                <div class="header_content">
                  <h5>${firstName.toUpperCase()}  ${lastName.toUpperCase()}</h5>
                  <button id="marks_toggle">
                    <i class="fa fa-plus marks_toggle"></i>
                  </button>
                </div>
                <ul class="student_detail_list">
                  <li class="student__details-item">Email - ${email}</li>
                  <li class="student__details-item">Company - ${company}</li>
                  <li class="student__details-item">Skill - ${skill}</li>
                  <li class="student__details-item">Average - ${average.toFixed(2)}%</li>
                </ul>
                <ul id="${id}" class="students_marks">
                    ${this.loopGrade(grades)}
                </ul>
              </div>
            </div>`;

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
      const { company, email, firstName, grades, id, lastName, pic, skill } = stud;

      const average =
        grades.reduce((total, current) => parseInt(total) + parseInt(current), 0) /
        grades.length;

      html = `
      <div id="${id}" class="student_container">
      <div class="image_container">
        <img src="${pic}" alt="${firstName}" />
      </div>
      <div class="student_details">
        <div class="header_content">
          <h5>${firstName.toUpperCase()}  ${lastName.toUpperCase()}</h5>
          <button class="marks_toggle" id="marks_toggle">
            <i class="fa fa-plus marks_toggle"></i>
          </button>
        </div>
        <ul class="student_detail_list">
          <li class="student__details-item">Email - ${email}</li>
          <li class="student__details-item">Company - ${company}</li>
          <li class="student__details-item">Skill - ${skill}</li>
          <li class="student__details-item">Average - ${average.toFixed(2)}%</li>
        </ul>

        <ul class="students_marks">
          ${this.loopGrade(grades)}
        </ul>
      </div>
    </div>`;

      this.studentContent.innerHTML += html;
    });
  };
}
