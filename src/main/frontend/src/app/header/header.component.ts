import { Component } from '@angular/core';
import { WhoAmIService } from './who-am-i/who-am-i.service';


@Component({
	selector: 'myh-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {

	constructor(public whoAmIService: WhoAmIService) {
	}
}
