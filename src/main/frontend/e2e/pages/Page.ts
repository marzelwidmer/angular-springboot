import { Header } from '../header';
export abstract class Page {
	public header;

	constructor() {
		this.header = new Header();
	}

	abstract navigateTo();
}
