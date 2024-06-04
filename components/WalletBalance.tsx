import { connectDB } from "@/lib/mongo/connect";
import WalletBalanceChart from "./ui/WalletBalanceChart";

interface WalletBalance {
  date: string; 
  balance: number; 
}

const fetchWalletBalanceOverAYear = async (): Promise<{ balances: number[]; months: string[] }> => {
  try {
    const YearlyBalance = await connectDB();

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const oneYearAgoISOString = oneYearAgo.toISOString();

    const OneYearWalletBalances = await YearlyBalance!.find<WalletBalance>({
      date: { $gte: oneYearAgoISOString }
    }).toArray();

    const balances = OneYearWalletBalances.map((balance) => balance.balance);

    const months = OneYearWalletBalances.map((month) => {
      const date = new Date(month.date);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      return date.toLocaleDateString(undefined, options);

    })
    return { balances, months }

  } catch (err: any) {
    console.log(err.message)
    throw err; 
  }
}
const WalletBalance = async () => {

  const { balances, months } = await fetchWalletBalanceOverAYear();
  return (
    <div>
      <WalletBalanceChart balances={balances} months={months} />
    </div>
  );
};

export default WalletBalance;
