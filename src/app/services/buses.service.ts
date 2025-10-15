import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { busesQuery } from '../../utils/constants/busesQuery';

@Injectable()
export class BusesService {
  http = inject(HttpClient);

  getBuses() {
    const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
    return this.http.post(url, {
      headers: {
        'Content-Type': 'application/json',
        'digitransit-subscription-key': '3adea1f883ef43f8a0b7e3d1aa3684d0',
        'Access-Control-Allow-Origin': '*'
      },
      params: {
        query: busesQuery
      }
    }).subscribe(response => {
      console.log(response);
    });
  }
}
