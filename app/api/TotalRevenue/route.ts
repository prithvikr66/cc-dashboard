import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const interval = url.searchParams.get("interval");
  try {
    console.log(interval);
    const response = await axios.get(
      `https://staging-reportingapi.cryptocart.cc/orders/revenue?reportDate=2024-01-20&interval=${interval}`
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
        totalOrders,
      });
    } else if (interval === "Week") {
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
        totalOrders,
      });
    } else if (interval === "Month") {
      const daysOrder = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ];
      const itemsInOrder = daysOrder.map((day) =>
        items.find((item: any) => item.segmentName === day)
      );

      const labels = itemsInOrder.map((item) => item.segmentName);
      const datas = itemsInOrder.map((item) => item.segmentTotal);
      return NextResponse.json({
        labels,
        datas,
        totalOrders,
      });
    }

    const labels = items.map((item: any) => item.segmentName);
    const datas = items.map((item: any) => item.segmentTotal);

    return NextResponse.json({
      labels,
      datas,
      totalOrders,
    });
  } catch (err) {
    console.log(err);
  }
}
