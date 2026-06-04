export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];

  rows.forEach((row) => {
    row.classList.add('services-links-item');
    const link = row.querySelector('a');
    if (link) link.classList.add('services-links-link');
  });
}
