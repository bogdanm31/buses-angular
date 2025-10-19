import { Injectable } from '@angular/core';
import { timeUnits } from '../../utils/constants/timestamp';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {
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
