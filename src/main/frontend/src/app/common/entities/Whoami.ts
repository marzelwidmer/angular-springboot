import { RestResource } from '../services/base.service';

export interface Whoami extends RestResource {
	requestId: string;
	roles: string;
	language: string;
	mobile: string;
	benutzerId: string;
	name: string;
	firstName: string;
	mail: string;
	produzentenId: number;
	environment: string;
	vertriebskanal: string;
}
