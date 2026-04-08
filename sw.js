const CACHE = 'cd-timers-v2';
const ASSETS = ['./crimson-desert-timers.html','./sw.js','./manifest.json'];
const pending = new Map();

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./crimson-desert-timers.html'))));
});

self.addEventListener('message', e => {
  const { type, id, title, body, endTime } = e.data || {};
  if (type === 'SCHEDULE') {
    if (pending.has(id)) clearTimeout(pending.get(id));
    const delay = Math.max(0, endTime - Date.now());
    const t = setTimeout(() => {
      self.registration.showNotification(title, {
        body, icon: './icon-192.png', badge: './icon-96.png',
        vibrate: [300, 100, 300, 100, 300],
        tag: id, requireInteraction: true, data: { id }
      });
      pending.delete(id);
    }, delay);
    pending.set(id, t);
  }
  if (type === 'CANCEL') {
    if (pending.has(id)) { clearTimeout(pending.get(id)); pending.delete(id); }
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if (c.url && 'focus' in c) return c.focus();
    return clients.openWindow('./crimson-desert-timers.html');
  }));
});