import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderActionsComponent } from './header-actions/header-actions.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HeaderNavigationDesktopComponent } from './header-navigation/header-navigation-desktop.component';
import { HeaderNavigationMobileComponent } from './header-navigation/header-navigation-mobile.component';
import { WhoAmIService } from './who-am-i/who-am-i.service';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule
	],
	declarations: [
		HeaderComponent,
		HeaderNavigationDesktopComponent,
		HeaderActionsComponent,
		MobileHeaderComponent,
		HeaderNavigationMobileComponent,
		DropdownComponent
	],
	providers: [WhoAmIService],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule {
}
