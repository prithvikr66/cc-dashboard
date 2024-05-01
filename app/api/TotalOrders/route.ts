import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const interval = url.searchParams.get("interval");
    const response = await axios.get(
      `https://staging-reportingapi.cryptocart.cc/orders/totalcount?interval=${interval}&reportDate=2024-02-01`
    );

    const data = await response.data;

    const items = data.items;
    const totalOrders = data.totalCount;

    if (interval === "Year") {
      const monthOrder = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const itemsInOrder = monthOrder.map((month) =>
        items.find((item: any) => item.segmentName === month)
      );

      const labels = itemsInOrder.map((item) => item.segmentName);
      const datas = itemsInOrder.map((item) => item.segmentTotal);
      return NextResponse.json({
        labels,
        datas,
        totalOrders
      });
    } else if (interval === "Week") {
      console.log(items);
      if (!items.some((item: any) => item.segmentName === "Mon")) {
        let thursdayIndex = items.findIndex(
          (item: any) => item.segmentName === "Thu"
        );
        if (thursdayIndex !== -1) {
          items[thursdayIndex].segmentName = "Mon";
        }
      }

      const weekOrder = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
      const itemsInOrder = weekOrder.map((week) =>
        items.find((item: any) => item.segmentName === week)
      );

      const labels = itemsInOrder.map((item) => item.segmentName);
      const datas = itemsInOrder.map((item) => item.segmentTotal);
      return NextResponse.json({
        labels,
        datas,
        totalOrders
      });
    }

    const labels = items.map((item: any) => item.segmentName);
    const datas = items.map((item: any) => item.segmentTotal);

    return NextResponse.json({
      labels,
      datas,
      totalOrders
    });
  } catch (err) {
    console.log(err);
  }
}
