// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: "AIzaSyDWO2_zYBwnQ0T8fLD1GSaVK53CayHz4Ik",
  authDomain: "caminando-seguro.firebaseapp.com",
  databaseURL: "https://caminando-seguro.firebaseio.com",
  projectId: "caminando-seguro",
  storageBucket: "caminando-seguro.appspot.com",
  messagingSenderId: "1085895595623",
  appId: "1:1085895595623:web:96b9282a88c882c9e426c2"
};


export const snapshotToArray = snapshot =>{
  let returArray = [];
  snapshot.forEach(element => {
    let Data = element.val();
    Data.key = element.key;
    returArray.push(Data)
    
  });

  return returArray;
}

