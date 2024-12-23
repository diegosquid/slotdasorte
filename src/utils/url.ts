export function getRegistrationUrl(): string {
  const params = new URLSearchParams(window.location.search);
  const sub1 = params.get('sub1');
  const baseUrl = 'https://1wfwna.life/casino/list?open=register&p=kah5';
  
  return sub1 ? `${baseUrl}&sub1=${encodeURIComponent(sub1)}` : baseUrl;
}