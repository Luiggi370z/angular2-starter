// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'dd5d5cfe-d892-4892-b623-1134653cc289',
    clientId: '2ce67a78-63d5-48ef-ac8c-54be5e548c2e',
    redirectUri: window.location.href + '/auth-callback',
    endpoints: {
      'https://graph.microsoft.com': '00000003-0000-0000-c000-000000000000'
    },
    cacheLocation: 'localStorage'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
