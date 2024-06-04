import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const interval = url.searchParams.get("interval");
  try {
    const response = await axios.get(
      `https://staging-reportingapi.cryptocart.cc/customers/newvsreturning?interval=${interval}&reportDate=2024-02-01`
    );

    const data = await response.data;

    const items = data.items;
    const totalUsers = data.totalCount;

    const labels = items.map((item: any) => item.segmentName);
    const datas = items.map((item: any) => item.segmentTotal);

    return NextResponse.json({
      labels,
      datas,
      totalUsers,
    });
  } catch (err) {
    console.log(err);
  }
}
