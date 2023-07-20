import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchParticipantsComponent } from './fetch-participants.component';

describe('FetchParticipantsComponent', () => {
  let component: FetchParticipantsComponent;
  let fixture: ComponentFixture<FetchParticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchParticipantsComponent]
    });
    fixture = TestBed.createComponent(FetchParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
