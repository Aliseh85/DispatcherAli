import { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth'
class AuthService {
   private auth: FirebaseAuthTypes.Module
   constructor() {
       this.auth = firebase.auth()
   }
   public login (email: string, password: string) {
       this.auth.signInWithEmailAndPassword(email, password).then(() => {
               console.log('User created & signed in!')
           }).catch(error => {
               if (error.code === 'auth/invalid-email') console.log('Email address is invalid!')
               console.error(error)
           })
   }
   public logout() {
       this.auth.signOut().then(() => console.log('User is now signed out'))
   }
   public register (email: string, password: string) {
       this.auth.createUserWithEmailAndPassword(email, password).then(() => {
               console.log('Usercreated & signed in !')
           }).catch(error => {
               if (error.code === 'auth/email-already-in-use')
                   console.log('That email address is already in use!')
               if (error.code === 'auth/invalid-email')
                   console.log('That email address is invalid!')
               console.error(error)
           })
   }
}
export const authService = new AuthService()
