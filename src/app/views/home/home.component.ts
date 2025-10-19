import { Component, inject, OnInit, signal } from '@angular/core';
import { BusArrival } from '../../../utils/types/bus';
import { BusesService } from '../../services/buses.service';
import { BusComponent } from '../../features/bus/bus.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [BusesService]
})
export class HomeComponent implements OnInit {
  buses = signal<BusArrival[]>([]);
  busesService = inject(BusesService)
  isLoading = signal<boolean>(false);

  ngOnInit(): void {
    this.isLoading.set(true);
    this.busesService
      .getBuses()
      .subscribe(response => {
        const {
          id,
          name,
          stoptimesWithoutPatterns
        } = response.data.stop;
        this.buses.set(stoptimesWithoutPatterns);
        this.isLoading.set(false);
      });
  }
}
