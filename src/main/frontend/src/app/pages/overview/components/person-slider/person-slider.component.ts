import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PartnerService } from '../../../../common/services/partner.service';

@Component({
	selector: 'myh-person-slider',
	templateUrl: './person-slider.component.html',
	styleUrls: ['./person-slider.component.sass']
})
export class PersonSliderComponent implements OnInit, OnDestroy {
	public members;
	public index = 0;
	private partnerServiceSubscription: Subscription;

	constructor(private partnerService: PartnerService) {
	}

	ngOnInit() {
		this.partnerServiceSubscription = this.partnerService.get()
			.subscribe(partner => {
				const { customers } = partner;
				this.members = customers;
			});
	}

	ngOnDestroy() {
		this.partnerServiceSubscription.unsubscribe();
	}

	increment() {
		this.index = (this.index + 1) % this.members.length;
	}

	decrement() {
		this.index = (this.index + this.members.length - 1) % this.members.length;
	}
}
