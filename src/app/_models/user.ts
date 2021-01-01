export class User {
    constructor(
        public username: string,
        public password: string,
        public idTableProjet: number,
        public email?: string
    ) {}
}

// Possibilité de faire en sorte que les emails soit facultatif en ajoutant ? après "email"