import { Component } from '@angular/core';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
