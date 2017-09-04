import { Component, Input } from '@angular/core';
import { ICONS } from '../../../common/icons';

@Component({
	selector: 'myh-list-block',
	templateUrl: './list-block.component.html',
	styleUrls: ['./list-block.component.scss']
})
export class ListBlockComponent {

	@Input()
	list: [ListBlockItem];

	@Input()
	title: string;
}

export interface ListBlockItem {
	href: string;
	title: string ;
	details?: string;
	iconClass?: ICONS;
	isFinalLink?: boolean;
}
