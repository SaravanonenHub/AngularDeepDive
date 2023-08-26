import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { StandaloneMainComponent } from './app/developer-guide/standalone-main.component';
import { Route, provideRouter } from '@angular/router';
import{LOCALE_ID} from '@angular/core'
if (environment.production) {
  enableProdMode();
}
// export const routes:Route[] = [
//   {path:'admin',loadComponent: () => import('./app/developer-guide/standalone-sub.component').then(mod => mod.StandaloneSubComponent),}
// ]
// bootstrapApplication(StandaloneMainComponent,{
//   providers:[
//     importProvidersFrom()
//   ]
// }).catch(err => console.log(err));
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
