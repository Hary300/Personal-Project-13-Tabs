const buttons = document.querySelectorAll('.tabs .btns button');
const contents = document.querySelectorAll('.tabs .content .text');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    buttons.forEach((button) => button.classList.remove('active'));
    button.classList.add('active');
    const dataTab = this.dataset.tab;
    contents.forEach((content) => {
      content.classList.remove('active');

      if (content.dataset.tab === dataTab) {
        content.classList.add('active');
      }
    });
  });
});
