export class TotaalProduct {
    constructor(
            public id: number,
            public product: string,
            public dikte: string,
            public formaat: string,
            public materiaal: string,
            public opties: [string],
            public kleur: string,
            public datumKlaar: Date,
            public naamKlant: string
    ) { }
}
