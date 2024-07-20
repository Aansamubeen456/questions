const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    return element;
  } else {
    throw Error(
      `the element ${selector} you are trying to access does not exist.`
    );
  }
};

const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

// DOM Traversing
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//     console.log(question);

//     questions.forEach((item) => {
//       if (item !== question) {
//         console.log(item);
//         item.classList.remove("show-text");
//       }
//     });
//   });
// });

// using Selector

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
