// import('./bootstrap')
// 	.catch(err => console.error(err));
import { loadManifest } from '@angular-architects/module-federation';
loadManifest('assets/mf.manifest.json') .catch((err) => console.error('Ошибка загрузки удаленных записей', err)) .then(() => import('./bootstrap')) .catch((err) => console.error(err));

// import { loadRemoteEntry } from '@angular-architects/module-federation';
//
// Promise.all([
//   loadRemoteEntry({
//     type: 'module',
//     remoteEntry: 'http://localhost:4201/remoteEntry.js',
//   }),
// ])
//   .catch((err) => console.error('Error loading remote entries', err))
//   .then(() => import('./bootstrap'))
//   .catch((err) => console.error(err));