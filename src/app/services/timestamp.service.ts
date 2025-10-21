import { computed, Injectable, OnInit, signal } from '@angular/core';
import { timeUnits } from '../../utils/constants/timestamp';
import { interval, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {
  constructor() {
    setInterval(() => {
      this.currentTime.set(Math.round(Date.now() / 1000))
    }, 1000);
  }

  currentTime = signal(Math.round(Date.now() / 1000));
  midnightTime = signal(new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000);

  timePassedFromMidnight = computed(() => Math.floor((this.currentTime() - this.midnightTime()) / 60) * 60);

  toUnits = (num: number, excludeUnits: string[] = ["s"]) => {
    let index = 0;
    const data = timeUnits.map((item) => ({
      ...item,
      value: 0
    }));

    while (num) {
      const t = num % 60;
      data[index].value = t;
      num -= t;
      num /= 60;
      index++;
    }

    return data.reverse().filter((unit) => !excludeUnits.includes(unit.symbol));
  };

  toClockString = (num: number) => {
    const data = this.toUnits(num);
  
    return data
      .map((unit) => (unit.value < 10 ? "0" : "") + unit.value)
      .join(":");
  };

  toTimeString = (num: number) => {
    const data = this.toUnits(num);
  
    return data
      .filter((unit) => !!unit.value)
      .map(
        (unit) =>
          `${unit.value} ${
            unit.value === 1 ? unit.name.singular : unit.name.plural
          }`
      )
      .join(" ");
  };
}
