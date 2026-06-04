export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];
  el.innerHTML = '';

  const heading = document.createElement('h3');
  heading.className = 'contact-form-heading';

  const form = document.createElement('form');
  form.className = 'contact-form-fields';

  rows.forEach((row) => {
    const cols = [...row.querySelectorAll(':scope > div')];
    if (cols.length >= 2) {
      const label = cols[0]?.textContent?.trim();
      const type = cols[1]?.textContent?.trim()?.toLowerCase() || 'text';

      if (type === 'heading') {
        heading.textContent = label;
        return;
      }

      const fieldWrapper = document.createElement('div');
      fieldWrapper.className = 'contact-form-field';

      const labelEl = document.createElement('label');
      labelEl.textContent = label;

      let input;
      if (type === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 4;
      } else if (type === 'select') {
        input = document.createElement('select');
        const options = cols[2]?.textContent?.split(',') || ['Select One'];
        options.forEach((opt) => {
          const option = document.createElement('option');
          option.textContent = opt.trim();
          input.append(option);
        });
      } else if (type === 'checkbox') {
        input = document.createElement('input');
        input.type = 'checkbox';
        fieldWrapper.classList.add('contact-form-field-checkbox');
      } else {
        input = document.createElement('input');
        input.type = type;
      }

      input.name = label.toLowerCase().replace(/[^a-z]/g, '-');
      input.placeholder = label;
      labelEl.setAttribute('for', input.name);
      input.id = input.name;

      fieldWrapper.append(labelEl, input);
      form.append(fieldWrapper);
    }
  });

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit';
  submitBtn.className = 'contact-form-submit';
  form.append(submitBtn);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  el.append(heading, form);
}
