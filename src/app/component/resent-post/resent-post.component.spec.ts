import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentPostComponent } from './resent-post.component';

describe('ResentPostComponent', () => {
  let component: ResentPostComponent;
  let fixture: ComponentFixture<ResentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
