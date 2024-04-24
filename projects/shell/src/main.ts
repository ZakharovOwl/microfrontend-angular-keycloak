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

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
//
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));


// Promise.all([
//   platformBrowserDynamic()
//     .bootstrapModule(AppModule),
//   loadManifest('assets/mf.manifest.json')
// ])
//   .catch((err) => console.error('Error loading remote entries', err))
  // .then(() => import('./bootstrap'))
  // .catch((err) => console.error(err));
