import { BusArrival } from "./bus";

export type Station = {
  id: string;
  name: string;
  stoptimesWithoutPatterns: BusArrival[]
};