/* A Godless Realm : cache des images et sons du jeu (assets/ uniquement). */
const V = 'pdm-assets-v61f';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('pdm-assets-') && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || !u.pathname.includes('/assets/')) return;
  if (e.request.headers.has('range')) return; // <audio> sur iOS demande des morceaux (206) : on laisse passer au réseau
  e.respondWith(caches.open(V).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok && r.status === 200) c.put(e.request, r.clone()); return r; }))));
});
