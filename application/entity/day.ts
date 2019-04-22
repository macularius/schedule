import { TimeRange } from "./timeRange";

export class Day {
    date: string;
    ranges: TimeRange[];

    constructor(date: string, ranges: TimeRange[]){
        this.date = date;
        this.ranges = ranges;
    }
}