class UI {
  constructor() {
    this.container = document.querySelector(".container");
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
      this.container.innerHTML += html;
    });
  };
}
