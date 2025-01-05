import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionhotelsComponent } from './sectionhotels.component';

describe('SectionhotelsComponent', () => {
  let component: SectionhotelsComponent;
  let fixture: ComponentFixture<SectionhotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionhotelsComponent]
    });
    fixture = TestBed.createComponent(SectionhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
