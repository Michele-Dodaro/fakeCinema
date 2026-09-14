import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeFilm } from './fake-film';

describe('FakeFilm', () => {
  let component: FakeFilm;
  let fixture: ComponentFixture<FakeFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeFilm],
    }).compileComponents();

    fixture = TestBed.createComponent(FakeFilm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
