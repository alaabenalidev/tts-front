export interface BankTransaction {
    idTransaction?: number;
    amount: number;
    date?: Date;
    type?: string;
    cin: number;
    name: string;
    rib: string;
    bankAccount?: any; // Ajustez le type en fonction de votre modèle de compte bancaire
}
