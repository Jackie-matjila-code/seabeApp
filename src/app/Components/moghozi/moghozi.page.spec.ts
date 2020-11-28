import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoghoziPage } from './moghozi.page';

describe('MoghoziPage', () => {
  let component: MoghoziPage;
  let fixture: ComponentFixture<MoghoziPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoghoziPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoghoziPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
