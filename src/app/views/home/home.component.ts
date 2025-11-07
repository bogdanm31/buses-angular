import { Component, inject, OnInit, signal } from '@angular/core';
import { BusDetails } from '@/utils/types/bus';
import { BusesService } from '@/services/buses.service';
import { BusComponent } from '@/features/bus/bus.component';
import { Station } from '@/utils/types/station';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [BusesService]
})
export class HomeComponent implements OnInit {
  station = signal<Station>({
    id: '0',
    name: ''  
  })
  buses = signal<BusDetails[]>([]);
  busesService = inject(BusesService)
  isLoading = signal<boolean>(false);

  ngOnInit(): void {
    this.isLoading.set(true);
    this.busesService
      .getBuses()
      .subscribe(response => {
        const {
          station,
          buses
        } = response.data;
        this.station.set(station);
        this.buses.set(buses);
        this.isLoading.set(false);
      });
  }
}
