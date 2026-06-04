export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];

  rows.forEach((row) => {
    const cols = [...row.querySelectorAll(':scope > div')];
    if (cols[0]) {
      const heading = cols[0].querySelector('h2');
      if (heading) {
        row.classList.add('office-info-header');
      }
      const links = cols[0].querySelectorAll('a[href^="tel:"]');
      if (links.length) {
        row.classList.add('office-info-contact');
      }
      const paragraphs = cols[0].querySelectorAll('p');
      if (paragraphs.length > 2 && !heading && !links.length) {
        row.classList.add('office-info-description');
      }
    }
  });
}
