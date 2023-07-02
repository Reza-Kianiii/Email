import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInboxComponent } from './email-inbox.component';

describe('EmailInboxComponent', () => {
  let component: EmailInboxComponent;
  let fixture: ComponentFixture<EmailInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
