import TransactionType from "./TransactionType";

interface UserTransactionDetails {
  id: number;
  transactions: TransactionType[];
}

export default UserTransactionDetails;
