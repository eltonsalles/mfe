import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// @ts-ignore
import { MyElement } from 'lib-web-components';
customElements.define('my-element-2', MyElement);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
