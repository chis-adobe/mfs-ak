export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];
  el.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'industry-selector-wrapper';

  const heading = document.createElement('h2');
  heading.className = 'industry-selector-heading';
  heading.textContent = 'Wherever Business Takes You';

  const desc = document.createElement('p');
  desc.className = 'industry-selector-desc';
  desc.textContent = 'Answer two questions and put our thinking to work on your challenges.';

  const stepHeading = document.createElement('h3');
  stepHeading.className = 'industry-selector-step';
  stepHeading.textContent = 'Step 1: What is your industry?';

  const list = document.createElement('ul');
  list.className = 'industry-selector-list';

  rows.forEach((row) => {
    const text = row.textContent.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.className = 'industry-selector-option';
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'industry';
    radio.value = text;
    radio.id = `industry-${text.toLowerCase().replace(/[^a-z]/g, '-')}`;
    const label = document.createElement('label');
    label.setAttribute('for', radio.id);
    label.textContent = text;
    li.append(radio, label);
    list.append(li);
  });

  wrapper.append(heading, desc, stepHeading, list);
  el.append(wrapper);
}
