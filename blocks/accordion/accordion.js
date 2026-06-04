export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];

  rows.forEach((row) => {
    const cols = [...row.querySelectorAll(':scope > div')];
    if (cols.length < 2) return;

    const title = cols[0];
    const content = cols[1];

    row.classList.add('accordion-item');
    title.classList.add('accordion-title');
    content.classList.add('accordion-content');

    title.setAttribute('role', 'button');
    title.setAttribute('aria-expanded', 'false');
    title.setAttribute('tabindex', '0');

    content.hidden = true;

    const toggle = () => {
      const isOpen = row.classList.contains('is-open');
      row.classList.toggle('is-open');
      content.hidden = isOpen;
      title.setAttribute('aria-expanded', String(!isOpen));
    };

    title.addEventListener('click', toggle);
    title.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}
