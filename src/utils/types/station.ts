import { BusDetails } from "./bus";

export type Station = {
  id: string;
  name: string;
};

export type StationArrivals = {
  station: Station;
  buses: BusDetails[]
};