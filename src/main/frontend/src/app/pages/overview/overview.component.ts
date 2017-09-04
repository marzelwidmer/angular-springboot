import { Component } from '@angular/core';
import { ListBlockItem } from '../../components/template/list-block/list-block.component';
import { ICONS } from '../../common/icons';

@Component({
	templateUrl: './overview.component.html'
})
export class OverviewComponent {
	public messages: [ListBlockItem] = [
		{
			title: 'msg1',
			href: 'https://www.google.ch'
		},
		{
			title: 'msg2',
			href: 'https://www.helsana.ch'
		}
	];

	public documents: [ListBlockItem] = [
		{
			title: 'doc1',
			href: 'https://www.google.ch',
			iconClass: ICONS.PDF
		},
		{
			title: 'doc2',
			href: 'https://www.google.ch',
			iconClass: ICONS.EMPTY,
			details: new Date().toDateString()
		},
		{
			title: 'doc3',
			href: 'https://www.google.ch',
			iconClass: ICONS.AVATAR_MALE,
			details: new Date().toDateString()
		}
	];

	public orders: [ListBlockItem] = [
		{
			title: 'order',
			href: 'https://www.order.ch',
		},
		{
			title: 'overview.index.alle_auftraege',
			href: 'https://www.showAll.ch',
			isFinalLink: true
		}
	];

	public primeLinks: [ListBlockItem] = [
		{
			title: 'overview.index.invoice.title',
			href: 'https://www.order.ch',
		},
		{
			title: 'overview.index.versichertenkarte',
			href: 'https://www.order.ch',
		},
		{
			title: 'overview.index.unfall',
			href: 'https://www.order.ch',
		}
	];
}
