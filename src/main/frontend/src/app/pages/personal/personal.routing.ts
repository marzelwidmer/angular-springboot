import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';
import { ModuleWithProviders } from '@angular/core';

const personalRoutes: Routes = [
	{
		path: 'personal', redirectTo: 'personal/0', pathMatch: 'full'
	},
	{
		path: 'personal/:index', component: PersonalComponent
	}
];

export const PersonalRouting: ModuleWithProviders = RouterModule.forChild(personalRoutes);
