import { Component, input } from '@angular/core';
import { BusArrival } from '../../../utils/types/bus';
import { CardComponent } from '../../components/card/card.component';
import { toUnits } from '../../../hooks/useTimestamp';

@Component({
  selector: 'app-bus',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.scss'
})
export class BusComponent {
  nrToUnits = toUnits;
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
