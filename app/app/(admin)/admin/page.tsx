import {
  Grid,
  Col,
  // Card,
  // Text,
  // AreaChart,
  // Metric,
  // DatePicker,
} from "@tremor/react";
import UsageByModel from "./usage-by-model-chart";
import { getSession, ADMIN_LIST, isName } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getSession();
  if (!(session?.user?.name && ADMIN_LIST.includes(session.user.name))) {
    // Replace '/dashboard' with the desired redirect path
    redirect("/");
  }

  return (
    <>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        <Col numColSpan={1} numColSpanSm={2} numColSpanLg={3}>
          {/*<UsageAnalysis />*/}
          {/*<Card></Card>*/}
          {/*<DatePicker className="max-w-sm mx-auto justify-center" />*/}
          {/*<DateRangePickerSpanish />*/}
        </Col>
        <Col numColSpan={1} numColSpanSm={2} numColSpanLg={3}>
          <UsageByModel />
        </Col>
      </Grid>
    </>
  );
}