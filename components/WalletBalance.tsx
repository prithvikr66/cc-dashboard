import { connectDB } from "@/lib/mongo/connect";
import WalletBalanceChart from "./ui/WalletBalanceChart";


const fetchWalletBalanceOverAYear = async()=>{
  try{
    const YearlyBalance = await connectDB();

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const oneYearAgoISOString = oneYearAgo.toISOString();

    const OneYearWalletBalances = await YearlyBalance!.find({
      date: { $gte: oneYearAgoISOString }
    }).toArray();

    const balances = OneYearWalletBalances.map((balance)=>balance.balance)

    const months = OneYearWalletBalances.map((month)=>{
      const date = new Date(month.date);
      const options:any = { year: 'numeric', month: 'long' };
      return date.toLocaleDateString(undefined, options);
    
    })
    return {balances, months}
    
  }catch(err:any){
    console.log(err.message)
  }
}
const WalletBalance = async () => {
  
 const {balances , months } = await fetchWalletBalanceOverAYear();
  return (
    <div>
      <WalletBalanceChart balances ={balances} months ={months}/>
    </div>
  );
};

export default WalletBalance;
