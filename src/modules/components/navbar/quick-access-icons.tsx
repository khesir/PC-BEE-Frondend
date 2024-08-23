import {Bell, Calendar, FileQuestion, Inbox} from 'lucide-react';
import {Link} from 'react-router-dom';

const QAIcons = [
	{
		title: 'Nofications',
		icon: Bell,
		href: '/announcements',
	},
	{
		title: 'Calendar',
		icon: Calendar,
		href: '/calendar',
	},
	{
		title: 'Inbox',
		icon: Inbox,
		href: '/announcements',
	},
	{
		title: 'Guide',
		icon: FileQuestion,
		href: '/announcements',
	},
];

export function QuickAccessIcons() {
	return (
		<div className="flex items-center">
			{QAIcons.map((item, index) => (
				<Link key={index} to={item.href}>
					<item.icon className="mr-2 h-5 w-5" />
				</Link>
			))}
		</div>
	);
}
