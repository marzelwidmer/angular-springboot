import { Component, Input } from '@angular/core';
import { Contract } from '../../../../common/entities/Customer';

@Component({
	selector: 'myh-contract-data',
	templateUrl: './contract-table.component.html',
	styleUrls: ['./contract-table.component.scss']
})

export class ContractTableComponent {

	@Input()
	contract: Contract;

	constructor() {
	}
}
