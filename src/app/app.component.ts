import { UserService } from './shared/services/user.service';
import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService) {
    auth.user$.subscribe(x => {
      if (x) {
        userService.save(x);
      }
    });
  }
}
