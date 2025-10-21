import { Component, inject } from '@angular/core';
import { TimestampService } from '../../services/timestamp.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  timestampService = inject(TimestampService);
}
