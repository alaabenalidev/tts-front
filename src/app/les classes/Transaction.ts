// transaction.ts
export interface Transaction {
  idTransaction?: number; // Optionnel si auto-incrémenté
  Amount: number;
  Date: Date;
  Type: string;
  cin: number;
  name: string;
  rib: string;
  bankAccount: { id: number };  // Correspond à la relation avec BankAccount
  }
  