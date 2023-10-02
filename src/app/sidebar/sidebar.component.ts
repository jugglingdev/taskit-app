import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  user: User = {
    name: 'Name',
    email: 'Email@email.com',
    profileImage: '../../assets/profile-image.jpg'
  }
}
