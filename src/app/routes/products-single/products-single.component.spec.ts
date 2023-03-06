import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSingleComponent } from './products-single.component';

describe('ProductsSingleComponent', () => {
  let component: ProductsSingleComponent;
  let fixture: ComponentFixture<ProductsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
