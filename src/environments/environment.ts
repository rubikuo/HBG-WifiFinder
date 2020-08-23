// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAuzI9utkFl7QHQNs4DXU21iLamgZt_nr4",
    authDomain: "wifihotspotfinder.firebaseapp.com",
    databaseURL: "https://wifihotspotfinder.firebaseio.com",
    projectId: "wifihotspotfinder",
    storageBucket: "wifihotspotfinder.appspot.com",
    messagingSenderId: "469093974312",
    appId: "1:469093974312:web:39e58dec07018fea9e901d",
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoiaGlyc2NoYmF1bSIsImEiOiJjanRlNng2b3EwazMyNDVxaThnb2MxOGtoIn0.2ZK2MPVV9Zoq_-EBVrafLg'
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
