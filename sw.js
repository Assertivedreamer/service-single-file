self.addEventListener('install', event => {
    console.log('V1 installing…');
  
    // cache a cat SVG
    event.waitUntil(
        //Stores the data from the API in cache
      caches.open('static-v1').then(cache => cache.add('http://localhost:8000/'))
    );
  });
  
  self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
  });
  
  self.addEventListener('fetch', event => {
    //If the same API requested again then get it from the cache.
    if (event.request.url == 'http://localhost:8000/') {
        console.log('get from cache');
      event.respondWith(caches.match('http://localhost:8000/'));
    }
  });
