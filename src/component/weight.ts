import { DateTime } from 'luxon';

export class Weight {
    readonly date: DateTime;

    constructor(readonly id: string, readonly weight: number, date: string) {
        this.date = DateTime.fromISO(date);
    }

    get year(): number {
        return this.date.year;
    }

    toDto(): any {
        return {
            id: this.id,
            weight: this.weight,
            date: this.date.toISO(),
        }
    }
}