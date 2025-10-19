import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { busesQuery } from '../../utils/constants/busesQuery';
import { Station } from '../../utils/types/station';

@Injectable()
export class BusesService {
  http = inject(HttpClient);

  getBuses() {
    const newUrl = 'https://api.digitransit.fi/routing/v2/hsl/gtfs/v1';
    return this.http.post<{data: { stop: Station }}>(newUrl, {
      query: busesQuery
    }, {
      headers: {
        'Content-Type': 'application/json',
        'digitransit-subscription-key': '3adea1f883ef43f8a0b7e3d1aa3684d0',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
