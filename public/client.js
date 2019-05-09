const log = console.log;

async function submitSignUp(e) {

  let res = await fetch('/signup', {
    method: 'POST',
    body: new FormData(e.target),
    credentials: 'include'
  });

  if (res.status == 200 && window.PasswordCredential) {
    log("Success! Saving credentials...");
    var c = await navigator.credentials.create({ password: e.target });
    return navigator.credentials.store(c);
  } else {
    return Promise.resolve(profile);
  }

}

async function submitSignIn(e) {
  // Try sign-in with AJAX
  fetch('/signin', {
    method: 'POST',
    body: new FormData(e.target),
    credentials: 'include'
  });

  // if (window.PasswordCredential) {
  //   var c = await navigator.credentials.create({ password: e.target });
  //   return navigator.credentials.store(c);
  // } else {
  //   return Promise.resolve(profile);
  // }
}

// if (window.PasswordCredential || window.FederatedCredential) {
//   // if (!user.isSignedIn()) {
//   if (true) {

//     navigator.credentials.get({
//       password: true,
//       federated: {
//         providers: [
//           'https://accounts.google.com'
//         ]
//       },
//       mediation: 'optional'
//     }).then(c => {
//       if (c) {
//         console.log(`c.type = ${c.type}`);
//         switch (c.type) {
//           case 'password':
//             // return sendRequest(c);
//             break;
//           case 'federated':
//             // return gSignIn(c);
//             break;
//         }
//       } else {
//         return Promise.resolve();
//       }
//     }).then(profile => {
//       if (profile) {
//         console.log(profile);
//         // updateUI(profile);
//       }
//     }).catch(error => {
//       showError('Sign-in Failed');
//     });
//   }
// }