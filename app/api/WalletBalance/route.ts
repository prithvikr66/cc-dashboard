import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import { connectDB } from "@/lib/mongo/connect";
interface WalletBalance {
  date: string;
  balance: number;
}
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const interval = url.searchParams.get("interval");
  try {
    if (interval === "Month") {
      const database = await connectDB();
      const MonthlyBalance = await database!.collection("MonthlyBalanceModels");

      const today = new Date();
      const oneMonthAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        1
      );
      const oneMonthAgoIsoString = oneMonthAgo.toISOString();
      const OneMonthWalletBalances = await MonthlyBalance!
        .find<WalletBalance>({
          date: { $gte: oneMonthAgoIsoString },
        })
        .toArray();

      const data = OneMonthWalletBalances.map((balance) => balance.balance);
      const labels = OneMonthWalletBalances.map((day) => {
        const date = new Date(day.date);
        const options: Intl.DateTimeFormatOptions = {
          day: "numeric",
        };
        return date.toLocaleDateString(undefined, options);
      });
      return NextResponse.json({
        data,
        labels,
      });
    } else if (interval === "Year") {
      const database = await connectDB();
      const YearlyBalance = await database!.collection("YearlyBalanceModels");

      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

      const oneYearAgoISOString = oneYearAgo.toISOString();

      const OneYearWalletBalances = await YearlyBalance!
        .find<WalletBalance>({
          date: { $gte: oneYearAgoISOString },
        })
        .toArray();

      const data = OneYearWalletBalances.map((balance) => balance.balance);

      const labels = OneYearWalletBalances.map((month) => {
        const date = new Date(month.date);
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
        };
        return date.toLocaleDateString(undefined, options);
      });
      return NextResponse.json({
        data,
        labels,
      });
    } else if (interval === "Week") {
      const database = await connectDB();
      const MonthlyBalance = await database!.collection("MonthlyBalanceModels");

      const today = new Date();
      const oneWeekAgo = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      );

      const oneWeekAgoIsoString = oneWeekAgo.toISOString();
      const OneWeekBalances = await MonthlyBalance!
        .find<WalletBalance>({
          date: { $gte: oneWeekAgoIsoString },
        })
        .toArray();

      const data = OneWeekBalances.map((balance) => balance.balance);
      const labels = OneWeekBalances.map((day) => {
        const date = new Date(day.date);
        const options: Intl.DateTimeFormatOptions = {
          day: "2-digit",
        };
        return date.toLocaleDateString(undefined, options);
      });
      return NextResponse.json({
        data,
        labels,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
