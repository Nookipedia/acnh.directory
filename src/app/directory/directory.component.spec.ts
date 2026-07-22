import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectoryComponent } from './directory.component';

describe('DirectoryComponent', () => {
  let component: DirectoryComponent;
  let fixture: ComponentFixture<DirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows only English resources by default', () => {
    expect(component.projects.length).toBeGreaterThan(0);
    expect(component.projects.every(p => p.languages.includes('en'))).toBeTrue();
  });

  it('shows only resources in the selected language', () => {
    component.selectLang('ja');
    expect(component.projects.length).toBeGreaterThan(0);
    expect(component.projects.every(p => p.languages.includes('ja'))).toBeTrue();
  });

  it('filters by platform', () => {
    component.selectedPlatforms = ['ios'];
    component.applyFilters();
    expect(component.projects.length).toBeGreaterThan(0);
    expect(component.projects.every(p => !!p.ios)).toBeTrue();
  });

  it('matches any selected filter by default, all when meets-all is on', () => {
    component.selectedInformation = ['critters', 'items'];
    component.applyFilters();
    const anyCount = component.projects.length;
    expect(component.projects.every(p =>
      p.information.includes('critters') || p.information.includes('items'))).toBeTrue();

    component.filterMeetsAll = true;
    component.applyFilters();
    expect(component.projects.every(p =>
      p.information.includes('critters') && p.information.includes('items'))).toBeTrue();
    expect(component.projects.length).toBeLessThanOrEqual(anyCount);
  });

  it('filters by a single tag and clears other selections', () => {
    component.selectedPlatforms = ['android'];
    component.filterBySingleTag('tools', 'wiki');
    expect(component.selectedPlatforms).toEqual([]);
    expect(component.selectedTools).toEqual(['wiki']);
    expect(component.projects.length).toBeGreaterThan(0);
    expect(component.projects.every(p => p.tools.includes('wiki'))).toBeTrue();
  });

  it('resets filters', () => {
    component.filterBySingleTag('information', 'art');
    component.resetFilters();
    expect(component.selectedInformation).toEqual([]);
    expect(component.projects.every(p => p.languages.includes('en'))).toBeTrue();
  });

  it('sorts by name and back', () => {
    component.sortProjects();
    const names = component.projects.map(p => p.name);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
    component.sortProjects();
    const reversed = component.projects.map(p => p.name);
    expect(reversed).toEqual([...names].reverse());
  });
});
