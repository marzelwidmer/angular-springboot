import { AfterViewInit, Component, HostListener, Inject, ViewChild, ViewChildren } from '@angular/core';

@Component({
	selector: 'myh-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent implements AfterViewInit {

	public wrapped = false;
	public wrappedNavigation = false;

	@ViewChild('container')
	container;

	@ViewChildren('text,social,divider')
	socialElements;

	@ViewChildren('copyright,publication,privacy,legal')
	navigationElements;

	@HostListener('window:resize', [])
	manageSize() {
		const minWidth = this.getWidthSumOfElements([...this.socialElements._results, ...this.navigationElements._results]);
		const navElementsMinWidth = this.getWidthSumOfElements(this.navigationElements._results);


		if (this.container.nativeElement.offsetWidth > minWidth) {
			this.wrapped = false;
		} else {
			this.wrapped = true;
		}
		if (this.container.nativeElement.offsetWidth > navElementsMinWidth) {
			this.wrappedNavigation = false;
		} else {
			this.wrappedNavigation = true;
		}
	}

	// TODO Inject window Object https://github.com/angular/angular/issues/15640
	constructor() {
	}


	ngAfterViewInit() {
		setTimeout(() => this.manageSize(), 1);
	}

	getWidthSumOfElements(elements) {
		return elements
			.map((elementArr) => {
				const currentStyle = window.getComputedStyle(elementArr.nativeElement);
				return elementArr.nativeElement.offsetWidth + parseInt(currentStyle.marginLeft, 10) + parseInt(currentStyle.marginRight, 10);
			})
			.reduce((acc, cur) => acc += cur);
	}

	goToTop() {
		const cosParameter = window.scrollY / 2,
			scrollDuration = 300;

		let scrollCount = 0,
			oldTimestamp = performance.now();

		const step = (newTimestamp) => {
			scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
			if (scrollCount >= Math.PI) {
				window.scrollTo(0, 0);
			}
			if (window.scrollY === 0) {
				return;
			}
			window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
			oldTimestamp = newTimestamp;
			window.requestAnimationFrame(step);
		};

		window.requestAnimationFrame(step);
	}
}
