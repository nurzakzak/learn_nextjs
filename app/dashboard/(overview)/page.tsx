// import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
// import { fetchCardData } from "@/app/lib/data";
import CardWrapper from "@/app/ui/dashboard/cards";
import { Suspense } from "react";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from "@/app/ui/skeletons";

export default async function Page(){
    // const revenue = await fetchRevenue();
    // const latestInvoice = await fetchLatestInvoices();
    // const dataCard = await fetchCardData();
    const cardName = {
        totalPaidInvoices:'Collected',
        numberOfInvoices:'Total Invoices',
        totalPendingInvoices:'Pending',
        numberOfCustomers:'Total Customers',
    }
    // type CardDataKeys = 'numberOfInvoices' | 'numberOfCustomers' | 'totalPaidInvoices' | 'totalPendingInvoices';

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* {Object.entries(dataCard).map(([key, value])=>(
                    <Suspense>
                        <CardWrapper key={key} title={cardName[key as CardDataKeys]}  value={value} type={'invoices'}/>
                    </Suspense>
                ))} */}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense>
                <CardWrapper />
            </Suspense>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices />
                </Suspense>
            </div>

            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>



        </main>
        
    )
}
  