import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Since Angular 21 HttpClient works without this line (it is providedIn: 'root'),
    // but this is the one place to configure it: withFetch() uses the Fetch API,
    // and the admin step will add withInterceptors([...]) here to attach the JWT.
    provideHttpClient(withFetch()),
  ],
};
