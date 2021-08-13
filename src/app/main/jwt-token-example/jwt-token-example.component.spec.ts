import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtTokenExampleComponent } from './jwt-token-example.component';

describe('JwtTokenExampleComponent', () => {
  let component: JwtTokenExampleComponent;
  let fixture: ComponentFixture<JwtTokenExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtTokenExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtTokenExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
