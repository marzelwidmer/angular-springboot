import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PartnerService } from '../../common/services/partner.service';

import { DataBlockItem } from '../../components/template/data-block/data-block.component';
import { ICONS } from '../../common/icons';

import 'rxjs/add/operator/switchMap';

@Component({
	templateUrl: './personal.component.html'
})
export class PersonalComponent implements OnInit {

	public member;
	public index: number;
	public personal: [DataBlockItem];
	public contact: [DataBlockItem];

	constructor(private partnerService: PartnerService, private route: ActivatedRoute) {
	}

	ngOnInit() {

		this.route.paramMap
			.switchMap((params: ParamMap) => {
				this.index = +params.get('index');
				return this.partnerService.getOne(this.index);
			})
			.subscribe(member => {
				this.member = member;
				this.initPersonalData();
				this.initContactData();
			});
	}

	initPersonalData(): void {
		this.personal = [
			{
				key: 'personal.data.vorname',
				value: this.member.person.firstName
			},
			{
				key: 'personal.data.nachname',
				value: this.member.person.lastName
			},
			{
				key: 'personal.data.geburtsdatum',
				value: this.member.person.birthday
			},
			{
				key: 'personal.data.zivilstand',
				value: this.member.person.civilStatus || '-'
			},
			{
				key: 'personal.data.geschlecht',
				value: this.member.person.gender
			},
			{
				key: 'personal.data.versichertennummer',
				value: this.member.person.partnerNr || '-'
			},
			{
				key: 'personal.data.ahvnummer',
				value: this.member.person.socialInsuranceNumber || '-',
				iconClass: ICONS.INFO
			}
		];
	}

	initContactData(): void {
		this.contact = [
			{
				key: 'personal.contact.mobil',
				value: this.member.telephoneMobile
			},
			{
				key: 'personal.contact.festnetz',
				value: this.member.telephonePrivate
			},
			{
				key: 'personal.contact.email',
				value: this.member.person.email
			}
		];
	}
}
