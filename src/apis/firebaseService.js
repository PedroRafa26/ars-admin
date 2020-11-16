import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/storage';
import 'firebase/firestore';
import {firebaseConfig} from './config'

const mainApp = firebase.initializeApp(firebaseConfig)

class AuthServiceClass {
  authInstance = firebase.auth(mainApp);
  authMethod = firebase.auth;

  AuthService(){
    this.authInstance.useDeviceLanguage();
  }

  async getUser(){
    const user = await this.authInstance.currentUser;
    if (user) {
      return user;
    }
  }

  async SignUpWithEmailAndPassword({email, password}) {
    let error;

    const user = await this.authInstance.createUserWithEmailAndPassword(email, password).catch((e) => {
      error = e;
    });

    return {user, error};
  }

  async SignInWithEmailAndPassword({email, password}) {
    let error;
    const user = await this.authInstance.signInWithEmailAndPassword(email, password).catch((e) => {
      error = e;
    });
    // debugger
    return {user, error};
  }

  // TO DO, implement this
  async authWithGoogle() {
    var provider = this.authMethod.GoogleAuthProvider;

    let firebaseError;
    let user;
    try{
      const result = await this.authInstance.signInWithPopup(provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // // The signed-in user info.
      user = result.user;
    }catch (error) {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      firebaseError = error;
    };

    return {user, firebaseError};
  }

  async AskOTPCode(phoneNumber, appVerifier, getCodeForLink){
    let confirmationResult;
    let error;

    try {
      confirmationResult = await this.authInstance.signInWithPhoneNumber(phoneNumber, appVerifier);

      const code = await getCodeForLink();

      const credential = this.authMethod.PhoneAuthProvider.credential(confirmationResult.verificationId, code);

      this.authInstance.currentUser.linkWithCredential(credential);
    } catch (e) {
      error = e;
    }

    return { confirmationResult, error };
  }

  async signOut(){
    const error = await this.authInstance.signOut();
    // console.log(error);
    return { error };
  }

  authPersistence(setUser){
    this.authInstance.onAuthStateChanged((user) => {
      // debugger
      if (user) {
        setUser(user);
      }else{
        setUser("");
      }
    });
  }

  changeEmail = async (currentPassword, newEmail) => {
    var user = await this.getUser();
    console.log(user, newEmail, currentPassword);
    const credential = this.authMethod.EmailAuthProvider.credential(user.email, currentPassword);
    user.reauthenticateWithCredential(credential).then(() => {
      user.updateEmail(newEmail).then(() => {
        console.log("Email updated!");
      }).catch((error) => { console.log(error); });
    }).catch((error) => { console.log(error); });
  }

  changePassword = async (currentPassword, newPassword) => {
    var user = await this.getUser();
    console.log(user, currentPassword);
    const credential = this.authMethod.EmailAuthProvider.credential(user.email, currentPassword);
    user.reauthenticateWithCredential(credential).then(() => {
      user.updatePassword(newPassword).then(() => {
        console.log("Password updated!");
      }).catch((error) => { console.log(error); });
    }).catch((error) => { console.log(error); });
  }

  resetPassword(emailAddress){
    this.authInstance.sendPasswordResetEmail(emailAddress).then(function() {
      console.log('email sent');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }
};

class FireStoreServiceClass{
  Firestore = firebase.firestore();
  FireStoreMethod = firebase.firestore;
  
  FireStoreService(){
    this.Firestore.settings({ timestampsInSnapshots: true })
  }

  async uploadDoc(data, path, docName, parentDoc){
    let resp = this.Firestore
    let error;
    let id;
    try {
      if (parentDoc) {
        const collections = path.split('/');
        collections.forEach((element, index) => {
          if((index + 1) % 2 === 0){
            if(element === 'generatedKey'){
              resp = resp.doc();
              id = resp.id;
            } else {
              resp = resp.doc(element);
            }
          }else{
            resp = resp.collection(element)
          }
        });
        await resp.doc(docName).set(data);
      } else {
        if(docName === 'generatedKey'){
          resp = this.Firestore.collection(path).doc();
          id = resp.id
          await resp.set(data);
        }else{
          await this.Firestore.collection(path).doc(docName).set(data);
        }
      }
      resp = id || 'success'
    } catch (e) {
      error = e.message;
    }
    return {resp, error}
  }

  async getDoc(collection, documentPath){
    const doc = await this.Firestore.collection(collection).doc(documentPath).get();

    return doc.data();
  }

  async getDocWithID(collection, documentPath){
    const doc = await this.Firestore.collection(collection).doc(documentPath).get();
    return {
      data: doc.data(),
      id: doc.id
    };
  }

  async getQuery(collection, query){
    try {
      const querySnapshot = await this.Firestore.collection(collection).where(query[0], query[1], query[2]).get();
      let docs = {};
      querySnapshot.forEach((doc) => {
        docs[doc.id] = doc.data();
      })
      return docs;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async get2FilterQuery(collection, query) {
    try {
      const querySnapshot = await this.Firestore.collection(collection)
      .where(query[0][0], query[0][1], query[0][2])
      .where(query[1][0], query[1][1], query[1][2]).get();
      
      let docs = {};
      querySnapshot.forEach((doc) => {
        docs[doc.id] = doc.data();
      });

      return docs;
    } catch (err) {
      throw err;
    }
  }

  async get3FilterQuery(collection, query) {
    try {
      const querySnapshot = await this.Firestore.collection(collection)
      .where(query[0][0], query[0][1], query[0][2])
      .where(query[1][0], query[1][1], query[1][2])
      .where(query[2][0], query[2][1], query[2][2])
      .get();
      
      let docs = {};
      querySnapshot.forEach((doc) => {
        docs[doc.id] = doc.data();
      });

      return docs;
    } catch (err) {
      throw err;
    }
  }

  async getMultiFilterQuery(collection, query) {
    try {
      let finalQuery = this.Firestore.collection(collection);
      let numberOfQueries = query.length;
      for (let i = 0; i < numberOfQueries; i++) {
        finalQuery = finalQuery.where(query[i][0], query[i][1], query[i][2]);
      }

      const querySnapshot = await finalQuery.get();

      let docs = {};
      querySnapshot.forEach((doc) => {
        docs[doc.id] = doc.data();
      });

      return docs;
    } catch (err) {
      throw err;
    }
  }

  getRealTimeQuery(collection, query, onAdded, onChanged, onDeleted){
    this.Firestore.collection(collection).where(query[0], query[1], query[2]).onSnapshot(function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
            onAdded(change.doc)
          }
          if (change.type === "modified") {
            onChanged(change.doc)
          }
          if (change.type === "removed") {
            onDeleted(change.doc)
          }
      });
  })
  }

  generateGeoCode(lat, long){
    return new this.FireStoreMethod.GeoPoint(lat, long);
  }

  async deleteDoc(collection, doc){
    let resp, error;
    try {
      await this.Firestore.collection(collection).doc(doc).delete()
      resp = "Document successfully deleted!"
    } catch (e) {
      error = e;
    }
    return {resp, error}
  }
}

class StorageServiceClass {
  storage = firebase.storage();

  uploadFileWithListener (path, file, setFileUpload) {
    return new Promise((resolve, reject) => {
        const uploadTask = this.storage.ref(path).put(file);

        uploadTask.on('state_changed', function(snapshot){
          var progres = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log('Upload is ' + progres + '% done'); 
          setFileUpload && setFileUpload(parseInt(progres));
        }, function(error) {

          // Handle unsuccessful uploads
          reject(new Error(`No se pudo subir la imagen ${error}`));

        }, function() {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then(url => {              
            resolve(url);
          });
        });
    })
  }

  async downloadFileWithURL (url) {
    var downloadUrl = await this.storage.refFromURL(url).getDownloadURL();

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
      var blob = xhr.response;
      console.log(blob);
    };
    xhr.open('GET', downloadUrl);
    xhr.send();
  }
}

export const AuthService = new AuthServiceClass();
export const FireStoreService = new FireStoreServiceClass();
export const StorageService = new StorageServiceClass();