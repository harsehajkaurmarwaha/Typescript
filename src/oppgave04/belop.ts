export function formaterBelop(kroner: number): string {
  const formatted = kroner
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return `${formatted} kr`;
}