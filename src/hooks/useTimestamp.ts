import { timeUnits } from "../utils/constants/timestamp";

export const toUnits = (num: number, excludeUnits: string[] = ["s"]) => {
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
}