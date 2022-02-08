class UI {
  constructor() {
    this.studentContent = document.querySelector(".student_content");
    this.tags = [];
  }

  loopGrade = (arr) => {
    return arr
      .map((item, index) => {
        let number = 1 + index;
        return `<li class="marks__list-item">Test${number} -  ${item}%</li>`;
      })
      .join("");
  };

  loopTags = (arr) => {
    return arr
      .map((item, index) => {
        return `<div id="${index}" class="tag"><p>${item.value}</p></div>`;
      })
      .join("");
  };

  getStudents = (students) => {
    let html = "";
    return students.map((student) => {
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
              <div class="header_content">
                <h5>${firstName.toUpperCase()}  ${lastName.toUpperCase()}</h5>
                <button id="marks_toggle">
                  <i class="fa fa-plus fa-2x marks_toggle"></i>
                </button>
              </div>
              <ul class="student_detail_list">
                <li class="student__details-item">Email - ${email}</li>
                <li class="student__details-item">Company - ${company}</li>
                <li class="student__details-item">Skill - ${skill}</li>
                <li class="student__details-item">Average - ${average.toFixed(
                  2
                )}%</li>
              </ul>
              <div class="tag__area">
              <div class="tags">
                ${this.loopTags(this.tags)}
              </div>
              <div class="tag__form">
                <form id="${id}" class="tag-form">
                  <input type="hidden" id="${id}"/>
                  <input type="text" id="tag" class="tag_input" placeholder="Add a tag..." />
                </form>
              </div>
            </div>
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
        <div class="header_content">
          <h5>${firstName.toUpperCase()}  ${lastName.toUpperCase()}</h5>
          <button class="marks_toggle" id="marks_toggle">
            <i class="fa fa-plus fa-2x marks_toggle"></i>
          </button>
        </div>
        <ul class="student_detail_list">
          <li class="student__details-item">Email - ${email}</li>
          <li class="student__details-item">Company - ${company}</li>
          <li class="student__details-item">Skill - ${skill}</li>
          <li class="student__details-item">Average - ${average.toFixed(
            2
          )}%</li>
        </ul>
        <div class="tag__area">
          <div class="tags">
            <div class="tag">
              <p>New Tag</p>
            </div>
            <div class="tag">
              <p>New Tag</p>
            </div>
            <div class="tag">
              <p>New Tag</p>
            </div>
            <div class="tag">
              <p>New Tag</p>
            </div>
          </div>
          <div class="tag__form">
            <form id="${id}" class="tag-form" onsubmit="return false">
              <input type="hidden" id="${id}"/>
              <input type="text" id="tag" class="tag_input" placeholder="Add a tag..." />
            </form>
          </div>
        </div>
        <ul class="students_marks">
          ${this.loopGrade(grades)}
        </ul>
      </div>
    </div>`;
      this.studentContent.innerHTML += html;
    });
  };

  addTag = (element) => {
    element.addEventListener("change", (event) => {
      if (event.target.classList.contains("tag_input")) {
        //getting the form input value
        let inputValue = event.target.value;

        //selecting form as parent from the child which is input
        const form = event.target.parentElement;

        //adding event listener to the form
        form.addEventListener("submit", (event) => {
          if (this.tags.length === 0) {
            this.tags.push({ id: form.id, value: inputValue });
            localStorage.setItem("tags", JSON.stringify(this.tags));
          } else if (this.tags.length > 0) {
            this.tags.forEach((tag) => {
              console.log(tag);
              if (!this.tags.includes(tag.id)) {
                this.tags.push({ id: form.id, value: inputValue });
                localStorage.setItem("tags", JSON.stringify(this.tags));
              }
            });
          }

          //console.log(this.tags);

          form.reset();
          event.preventDefault();
        });
      }
    });
  };
}
