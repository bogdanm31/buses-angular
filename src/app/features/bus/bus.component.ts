import { Component, inject, input } from '@angular/core';
import { BusDetails } from '../../../utils/types/bus';
import { CardComponent } from '../../components/card/card.component';
import { TimestampService } from '../../services/timestamp.service';

@Component({
  selector: 'app-bus',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.scss',
  providers: [TimestampService]
})
export class BusComponent {
  timestampService = inject(TimestampService);
  
  bus = input<BusDetails>({
    delay: 0,
    arrival: 0,
    serviceDay: 0,
    tripId: '',
    name: ''
  })
}
