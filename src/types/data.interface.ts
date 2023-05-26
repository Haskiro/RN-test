export interface ITransaction {
  type: "income" | "outcome" | "loan" | "investment";
  _id: string;
  amount: number;
  name: IName;
  company: string;
  email: string;
  phone: string;
  address: string;
}

interface IName {
  first: string;
  last: string;
}
