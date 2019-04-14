export enum EntryType {Once, Daily, Weekly, Monthly, Quartly, Yearly}

export class Entry {

    private readonly _uuid: string;
    private readonly _type: EntryType;
    private readonly _title: string;

    constructor(uuid: string, type: EntryType, title: string) {
        this._uuid = uuid;
        this._type = type;
        this._title = title;
    }

    get uuid(): string {
        return this._uuid;
    }

    get type(): EntryType {
        return this._type;
    }

    get readableType(): string {
        return EntryType[this.type];
    }

    get title(): string {
        return this._title;
    }
}
