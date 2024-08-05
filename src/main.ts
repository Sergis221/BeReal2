import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

platformBrowserDynamic()
  .bootstrapModule(AppComponent)
  .catch(err => console.error('Error bootstrapping AppModule:', err));