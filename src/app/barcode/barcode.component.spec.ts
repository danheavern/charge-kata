import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeComponent } from './barcode.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BarcodeModule } from './barcode.module';

describe('BarcodeComponent', () => {
  let component: BarcodeComponent;
  let fixture: ComponentFixture<BarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [BarcodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
