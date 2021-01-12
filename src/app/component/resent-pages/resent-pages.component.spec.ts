import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentPagesComponent } from './resent-pages.component';

describe('ResentPagesComponent', () => {
  let component: ResentPagesComponent;
  let fixture: ComponentFixture<ResentPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResentPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResentPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
