import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithupComponent } from './githup.component';

describe('GithupComponent', () => {
  let component: GithupComponent;
  let fixture: ComponentFixture<GithupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithupComponent]
    });
    fixture = TestBed.createComponent(GithupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
