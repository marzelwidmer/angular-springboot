import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { WhoAmIService } from '../../header/who-am-i/who-am-i.service';
import { TranslationService } from './translation.service';
import { PartnerService } from './partner.service';

@NgModule({
	imports: [HttpModule],
	providers: [PartnerService, WhoAmIService, TranslationService]
})
export class ServicesModule {
}
