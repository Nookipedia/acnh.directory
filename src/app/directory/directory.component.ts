import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MultiselectComponent, MultiselectOption } from './multiselect/multiselect.component';
import { projectsData, Language, Project } from '../data/project-data';
import { languages } from '../data/languages';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MultiselectComponent]
})
export class DirectoryComponent implements OnInit {
  languageList = languages;
  selectedLang: Language = 'en';

  dropdownListPlatforms: MultiselectOption[] = [
    { id: 'website', text: 'Website' },
    { id: 'android', text: 'Android' },
    { id: 'ios', text: 'iOS' }
  ];
  dropdownListInformation: MultiselectOption[] = [
    { id: 'art', text: 'Art' },
    { id: 'critters', text: 'Critters' },
    { id: 'flowers', text: 'Flowers' },
    { id: 'fossils', text: 'Fossils' },
    { id: 'gameplay', text: 'Gameplay' },
    { id: 'gifts', text: 'Gifting' },
    { id: 'items', text: 'Items' },
    { id: 'villagers', text: 'Villagers' }
  ];
  dropdownListTools: MultiselectOption[] = [
    { id: 'api', text: 'API' },
    { id: 'checklist', text: 'Checklist' },
    { id: 'design sharing', text: 'Design Sharing' },
    { id: 'dreams', text: 'Dream Sharing' },
    { id: 'fake art', text: 'Fake Art Detection' },
    { id: 'island rating', text: 'Island Rating Calc' },
    { id: 'marketplace', text: 'Marketplace' },
    { id: 'music', text: 'Music Player' },
    { id: 'queueing', text: 'Queueing' },
    { id: 'simulator', text: 'Simulator' },
    { id: 'town tunes', text: 'Town Tunes' },
    { id: 'turnips', text: 'Turnip Pricing' },
    { id: 'weather', text: 'Weather Forecast' },
    { id: 'wiki', text: 'Wiki' }
  ];

  selectedPlatforms: string[] = [];
  selectedInformation: string[] = [];
  selectedTools: string[] = [];
  filterMeetsAll = false;

  filterData = this.shuffle([...projectsData]);
  projects = this.filterData;
  sorted = false;

  ngOnInit() {
    this.applyFilters();
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  selectLang(code: Language) {
    this.selectedLang = code;
    this.applyFilters();
  }

  resetFilters() {
    this.selectedPlatforms = [];
    this.selectedInformation = [];
    this.selectedTools = [];
    this.applyFilters();
  }

  applyFilters() {
    const match = (selected: string[], have: string[]) =>
      !selected.length || (this.filterMeetsAll
        ? selected.every(s => have.includes(s))
        : selected.some(s => have.includes(s)));

    this.projects = this.filterData.filter(item => {
      if (!item.languages.includes(this.selectedLang)) {
        return false;
      }

      const platforms = [];
      if (item.site) {
        platforms.push('website');
      }
      if (item.android) {
        platforms.push('android');
      }
      if (item.ios) {
        platforms.push('ios');
      }

      return match(this.selectedPlatforms, platforms)
        && match(this.selectedInformation, item.information)
        && match(this.selectedTools, item.tools);
    });
  }

  filterBySingleTag(kind: 'information' | 'tools', selection: string) {
    this.selectedPlatforms = [];
    this.selectedInformation = kind === 'information' ? [selection] : [];
    this.selectedTools = kind === 'tools' ? [selection] : [];
    this.applyFilters();
    this.scrollToTop();
  }

  filterToggle(event: Event) {
    this.filterMeetsAll = (event.target as HTMLInputElement).checked;
    this.applyFilters();
  }

  shuffleProjects() {
    this.filterData = this.shuffle(this.filterData);
    this.sorted = false;
    this.applyFilters();
  }

  shuffle(arr: Project[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      const j = i + Math.floor(Math.random() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  sortProjects() {
    this.sorted = !this.sorted;
    const direction = this.sorted ? 1 : -1;
    this.filterData.sort((a, b) => direction * a.name.localeCompare(b.name));
    this.applyFilters();
  }
}
