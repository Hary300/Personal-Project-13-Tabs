const buttons = document.querySelectorAll('.tabs .tabs-buttons button');
const contents = document.querySelectorAll('.tabs .tabs-content .text');

buttons.forEach((btn) => {
  btn.addEventListener('click', function () {
    const target = this.dataset.tab;

    // reset buttons → step-by-step (UI state utama)
    buttons.forEach((b) => b.classList.remove('active'));
    this.classList.add('active');

    // reset contents → condition-based (mapping data)
    contents.forEach((content) => {
      content.classList.toggle('active', content.dataset.tab === target);
    });
  });
});
