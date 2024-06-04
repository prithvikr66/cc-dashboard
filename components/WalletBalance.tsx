import { connectDB } from "@/lib/mongo/connect";
import WalletBalanceChart from "./ui/WalletBalanceChart";
const WalletBalance = async () => {
  // const YearlyBalance = await connectDB();

  // const Balance = await YearlyBalance!.insertOne({
  //   balance: 10,
  //   date: new Date(),
  // });
  return (
    <div>
      <WalletBalanceChart />
    </div>
  );
};

export default WalletBalance;
