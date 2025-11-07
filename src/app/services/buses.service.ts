import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { initialStation } from '@/utils/constants/bus';
import { StationArrivals } from '@/utils/types/station';

@Injectable()
export class BusesService {
  http = inject(HttpClient);

  getBuses() {
    const newUrl = 'http://localhost:3332/buses';
    return this.http.get<{ data: StationArrivals }>(`${newUrl}/${initialStation}`);
  }
}
