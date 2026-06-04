export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];
  if (rows.length === 0) return;

  const row = rows[0];
  const cols = [...row.querySelectorAll(':scope > div')];

  if (cols[0]) cols[0].classList.add('contact-card-photo');
  if (cols[1]) {
    cols[1].classList.add('contact-card-info');
    const heading = cols[1].querySelector('h3');
    if (heading) heading.classList.add('contact-card-name');
    const title = cols[1].querySelector('p:first-of-type');
    if (title) title.classList.add('contact-card-title');
    const links = cols[1].querySelectorAll('a');
    links.forEach((link) => {
      if (link.href.startsWith('tel:')) link.classList.add('contact-card-phone');
      if (link.href.startsWith('mailto:')) link.classList.add('contact-card-email');
    });
  }
  if (cols[2]) cols[2].classList.add('contact-card-bio');
}
