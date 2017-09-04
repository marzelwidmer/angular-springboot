import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ICONS } from '../../../common/icons';

@Component({
	selector: 'myh-data-block',
	templateUrl: './data-block.component.html'
})

export class DataBlockComponent {

	@Input()
	list: [DataBlockItem];

	@Input()
	title: string;

	@Input()
	link: string;

	@Output()
	onNavigate = new EventEmitter<string>();

	constructor() {}

}

export interface DataBlockItem {
	key: string;
	value: string;
	iconClass?: ICONS;
}
