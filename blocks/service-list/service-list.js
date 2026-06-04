export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];

  rows.forEach((row) => {
    row.classList.add('service-list-item');
    const cols = [...row.querySelectorAll(':scope > div')];
    if (cols[0]) {
      cols[0].classList.add('service-list-item-content');
      const heading = cols[0].querySelector('h3');
      if (heading) heading.classList.add('service-list-item-title');
      const desc = cols[0].querySelector('p');
      if (desc) desc.classList.add('service-list-item-desc');
      const link = cols[0].querySelector('a');
      if (link) link.classList.add('service-list-item-link');
    }
  });
}
