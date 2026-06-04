export default async function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];
  if (rows.length === 0) return;

  const row = rows[0];
  const cols = [...row.querySelectorAll(':scope > div')];

  if (cols[0]) cols[0].classList.add('feature-banner-image');
  if (cols[1]) {
    cols[1].classList.add('feature-banner-content');
    const link = cols[1].querySelector('a');
    if (link) link.classList.add('feature-banner-cta');
  }
}
