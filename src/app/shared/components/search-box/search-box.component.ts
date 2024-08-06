import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
	selector: 'shared-search-box',
	templateUrl: './search-box.component.html',
	styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {
	private debouncer: Subject<string> = new Subject<string>();
	private debouncerSubscription?: Subscription;

	@Input()
	public placeholder: string = '';

	@Input()
	public initialValue: string = '';

	@Output()
	public onValueEmitter: EventEmitter<string> = new EventEmitter<string>();

	@Output()
	public onDebounce: EventEmitter<string> = new EventEmitter<string>();

	searchEmitter(value: string): void {
		if (value === '') return;
		this.onValueEmitter.emit(value);
	}

	ngOnInit(): void {
		this.debouncerSubscription = this.debouncer
			.pipe(debounceTime(400))
			.subscribe((value) => this.onDebounce.emit(value));
	}

	ngOnDestroy(): void {
		this.debouncerSubscription?.unsubscribe();
	}

	debouncerEmitter(searchTerm: string) {
		this.debouncer.next(searchTerm);
	}
}
