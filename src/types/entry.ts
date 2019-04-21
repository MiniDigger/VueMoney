export enum EntryType {Once, Daily, Weekly, Monthly, Quartly, Yearly}

export class Entry {

    private readonly _uuid: string;
    private readonly _type: EntryType;
    private readonly _title: string;
    private readonly _amount: number;

    private _showDetails = false;

    constructor(uuid: string, type: EntryType, title: string, amount: number) {
        this._uuid = uuid;
        this._type = type;
        this._title = title;
        this._amount = amount;
    }

    get uuid(): string {
        return this._uuid;
    }

    get type(): EntryType {
        return this._type;
    }

    get readableType(): string {
        if (isNaN(Number(this.type))) {
            console.log(this.type);
            return this.type as unknown as string;
        } else {
            return EntryType[this.type];
        }
    }

    get title(): string {
        return this._title;
    }

    get amount(): number {
        return this.amount;
    }

    get showDetails(): boolean {
        return this._showDetails;
    }

    set showDetails(value: boolean) {
        this._showDetails = value;
    }
}
