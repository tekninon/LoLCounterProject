import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLastGameComponent } from './search-last-game.component';

describe('SearchLastGameComponent', () => {
  let component: SearchLastGameComponent;
  let fixture: ComponentFixture<SearchLastGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLastGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLastGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
