import { Component, input } from '@angular/core';
import { BusDetails } from '../../../utils/types/bus';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-bus',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.scss'
})
export class BusComponent {
  bus = input<BusDetails>({
    tripId: '',
    name: '',
    arrival: 0,
    delay: 0,
    serviceDay: 0
  })
}
