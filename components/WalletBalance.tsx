import { connectDB } from "@/lib/mongo/connect";
const WalletBalance = async () => {
  const YearlyBalance = await connectDB();

  const Balance = await YearlyBalance!.insertOne({
    balance: 10,
    date: new Date(),
  });
  return <div>Wallet Balance</div>;
};

export default WalletBalance;
