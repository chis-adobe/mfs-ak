export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];
  if (rows.length === 0) return;

  const row = rows[0];
  row.classList.add('mini-hero-content');

  const heading = row.querySelector('h1');
  if (heading) heading.classList.add('mini-hero-title');

  const breadcrumb = row.querySelector('ul');
  if (breadcrumb) {
    breadcrumb.classList.add('mini-hero-breadcrumb');
  }
}
