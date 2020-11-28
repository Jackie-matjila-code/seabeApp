import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternshipsPage } from './internships.page';

describe('InternshipsPage', () => {
  let component: InternshipsPage;
  let fixture: ComponentFixture<InternshipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternshipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
