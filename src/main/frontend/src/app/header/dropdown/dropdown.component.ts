import { Component, Input } from '@angular/core';
import { ICONS } from '../../common/icons';

@Component({
	selector: 'myh-dropdown',
	templateUrl: './dropdown.component.html'
})
export class DropdownComponent {

	@Input()
	public type: string;

	@Input()
	public title;

	@Input()
	public iconClass: ICONS;

	isOpen: boolean;

	open() {
		this.isOpen = true;
	}

	toggle() {
		this.isOpen = !this.isOpen;
	}

	close() {
		this.isOpen = false;
	}

	// close dropdown if click on content link
	inClick(event) {
		if (event.srcElement.tagName === 'A') {
			this.close();
		}
	}
}
