import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';
import { OverviewModule } from './pages/overview/overview.module';
import { PersonalModule } from './pages/personal/personal.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { ServicesModule } from './common/services/services.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent
	],
	imports: [
		AppRouting,
		BrowserModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [Http]
			}
		}),
		HeaderModule,
		OverviewModule,
		PersonalModule,
		ServicesModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
