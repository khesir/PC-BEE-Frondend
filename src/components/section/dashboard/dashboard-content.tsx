import {OrderCard} from '../orders/content/order-card';
import {OrderSheet} from '../orders/content/order-sheet';
import {OrderTable} from '../orders/content/order-table';

export default function DashboardContent() {
	return (
		<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
			<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
				<div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
					<OrderCard />
					<OrderTable />
				</div>
				<OrderSheet />
			</main>
		</div>
	);
}
