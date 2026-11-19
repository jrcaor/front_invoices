import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user_service/user-service';
import { User } from '../../model/interface_user';

@Component({
  imports: [FormsModule],
  selector: 'app-authentication',
  styleUrl: './authentication.css',
  templateUrl: './authentication.html',
  standalone: true
})
export class Authentication {

  mail = model<string>()
  passwd = model<string>()
  userService=inject(UserService)
  logejarse() {
    
    let user=this.userService.validate(this.mail() as string,this.passwd() as string) as User
    console.debug(user)
    if (Object.keys(user).length==0){
      console.log("usuaria no vàlid")
    }
    else{
      console.log("usuari valid")
    }
    //user={id: 3, mail: 'user3@gmail.com', passwd: 'user3', name: 'user3',surname:'surname3'};
    //this.userService.addUser(user);
    //console.log(this.userService.users)
  }
}
