import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

export interface MultiselectOption {
  id: string;
  text: string;
}

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MultiselectComponent {
  @Input() options: MultiselectOption[] = [];
  @Input() placeholder = 'Select...';
  @Input() selected: string[] = [];
  @Output() selectedChange = new EventEmitter<string[]>();

  open = false;

  constructor(private host: ElementRef<HTMLElement>) { }

  get label(): string {
    if (!this.selected.length) {
      return this.placeholder;
    }
    const texts = this.options.filter(o => this.selected.includes(o.id)).map(o => o.text);
    return texts.length > 3 ? `${texts.slice(0, 3).join(', ')} +${texts.length - 3}` : texts.join(', ');
  }

  toggle(id: string) {
    this.selected = this.selected.includes(id)
      ? this.selected.filter(s => s !== id)
      : [...this.selected, id];
    this.selectedChange.emit(this.selected);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.open && !this.host.nativeElement.contains(event.target as Node)) {
      this.open = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.open = false;
  }
}
