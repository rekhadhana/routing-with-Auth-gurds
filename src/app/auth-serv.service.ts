
export class AuthServService {
 loggedin=false;
 //to chchk the user authentication state it will take some time 
 
 isAuthenticated(){
 const promise=new Promise(
   (resolve,reject)=>{
     setTimeout(()=> {
       resolve(this.loggedin);
     }, 800);

   }
 );
 return promise;
}
 logIn(){
   this.loggedin=true;
 }
 logOut(){
   this.loggedin=false;
 }
  constructor() { }
}
