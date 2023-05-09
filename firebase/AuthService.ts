import { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth'
class AuthService {
   private auth: FirebaseAuthTypes.Module
   constructor() {
       this.auth = firebase.auth()
   }

   private validateEmail(input:string)
   {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
  
      return input;
  
    } else {
  
        
        throw new Error('invalid email');
  
    }
   }
   private validatePassword(input:string)
   {

    if (input!='') {
  
      return input;
  
    } else {
  
        
        throw new Error('password can`t be blank');
  
    }
   }
   private validateRePassword(pass1:string,pass2:string)
   {
    if (pass1!==pass2) {
  
      if (pass2=='')
    {
        throw new Error('please re-enter the password')
    } 
    else
    {   
        throw new Error('the password doesn`t match');
  
    }
   }
}
    public login (email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
        return this.auth.signInWithEmailAndPassword(this.validateEmail(email), this.validatePassword(password));
    }
   public logout() {
       this.auth.signOut().then(() => console.log('User is now signed out'))
   }
   public register (email: string, password: string,password2:string): Promise<FirebaseAuthTypes.UserCredential> {
        this.validateRePassword(password,password2);
        return this.auth.createUserWithEmailAndPassword(this.validateEmail(email), this.validatePassword(password));
 
      
   }
}
export const authService = new AuthService()