export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];
  el.classList.add('insights-cards-wrapper');

  rows.forEach((row) => {
    row.classList.add('insights-card');
    const cols = [...row.querySelectorAll(':scope > div')];

    if (cols[0]) {
      cols[0].classList.add('insights-card-image');
    }
    if (cols[1]) {
      cols[1].classList.add('insights-card-content');
      const category = cols[1].querySelector('p:first-child');
      if (category) category.classList.add('insights-card-category');
      const date = cols[1].querySelector('p:nth-child(2)');
      if (date) date.classList.add('insights-card-date');
      const heading = cols[1].querySelector('h3');
      if (heading) heading.classList.add('insights-card-title');
      const excerpt = cols[1].querySelector('p:nth-child(4), p:last-of-type');
      if (excerpt && excerpt !== category && excerpt !== date) {
        excerpt.classList.add('insights-card-excerpt');
      }
    }
  });
}
