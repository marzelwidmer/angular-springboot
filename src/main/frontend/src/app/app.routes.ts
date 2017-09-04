import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';

const ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/overview',
		pathMatch: 'full'
	},
	{ path: '**', component: OverviewComponent }
];

export const AppRouting = RouterModule.forRoot(ROUTES);
