import { Component, inject, OnInit, signal } from '@angular/core';
import { BusDetails } from '../../../utils/types/bus';
import { BusesService } from '../../services/buses.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [BusesService]
})
export class HomeComponent implements OnInit {
  buses = signal<BusDetails[]>([]);
  busesService = inject(BusesService)

  ngOnInit(): void {
    console.log('loading buses...')
    this.busesService.getBuses()
  }
}
