import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'shared-search-box',
	templateUrl: './search-box.component.html',
	styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
	@Input()
	public placeholder: string = '';

	@Output()
	public onValueEmitter: EventEmitter<string> = new EventEmitter<string>();

	searchEmitter(value: string): void {
		if (value === '') return;
		this.onValueEmitter.emit(value);
	}
}
