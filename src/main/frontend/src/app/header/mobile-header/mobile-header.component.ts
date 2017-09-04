import { Component } from '@angular/core';

@Component({
	selector: 'myh-mobile-header',
	templateUrl: './mobile-header.component.html'
})
export class MobileHeaderComponent {
	public modalOpen = false;

	setModalOpen(value: boolean) {
		this.modalOpen = value;
	}
}
