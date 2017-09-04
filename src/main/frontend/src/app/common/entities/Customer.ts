import { RestResource } from '../services/base.service';

export interface Partner extends RestResource {
	customers: [Member];
}

export interface Member {
	person: Person;
	contracts: [Contract];
}

export interface Person {
	firstName: string;
	lastName: string;
}

export interface Contract {
	kvName: string;
	kvNr: string;
	partnerNr: string;
	contractNr: string;
	coverages: [Coverage];
}

export interface Coverage {
	produktId: string;
	nettopraemie: number;
	unfall: string;
	franchise: string;
}
