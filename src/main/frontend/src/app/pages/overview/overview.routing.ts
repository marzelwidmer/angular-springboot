import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview.component';
import { ModuleWithProviders } from '@angular/core';
const overviewRoutes: Routes = [
	{
		path: 'overview', component: OverviewComponent
	}
];

export const OverviewRouting: ModuleWithProviders = RouterModule.forChild(overviewRoutes);
