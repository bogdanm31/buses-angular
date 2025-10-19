import { Component, inject, input } from '@angular/core';
import { BusArrival } from '../../../utils/types/bus';
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
  
  bus = input<BusArrival>({
    arrivalDelay: 0,
    realtimeArrival: 0,
    serviceDay: 0,
    trip: {
      id: 0,
      route: {
        shortName: ''
      }
    }
  })
}
