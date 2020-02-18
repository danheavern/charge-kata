import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ItemListModule } from '@app/item-list/item-list.module';
import { Item } from 'src/models/Item';

import { testItems } from 'src/models/TestData';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule, HttpClientTestingModule, NoopAnimationsModule, ItemListModule],
      declarations: [HomeComponent],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.items = testItems;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use test data', () => {
    expect(component.items).toEqual(testItems);
  });

  it('should initialize an array of items', () => {
    expect(component.items.length).toBeTruthy();
  });

  it('should add an item', () => {
    // Arange
    const initialLen = component.items.length;
    const newItem = new Item('', 0, '', '');

    // Act
    component.addItem(newItem);

    // Assert
    expect(component.items.length).toEqual(initialLen + 1);
    expect(component.items.some(i => i === newItem)).toBeTruthy();
    expect(component.items).toEqual(component.filteredList);
  });

  it('should remove an item', () => {
    // Arange
    const initialLen = component.items.length;
    const oldItem = component.items[0];

    // Act
    component.removeItem(oldItem);

    // Assert
    expect(component.items.length).toEqual(initialLen - 1);
    expect(component.items.some(i => i === oldItem)).toBeFalsy();
    expect(component.items).toEqual(component.filteredList);
  });

  it('should update an item', () => {
    // Arange
    const initialLen = component.items.length;
    const oldItem = component.items[0];
    const newItem = new Item('', 0, '', '');

    // Act
    component.editItem(oldItem, newItem);

    // Assert
    expect(component.items.length).toEqual(initialLen);
    expect(component.items.some(i => i === oldItem)).toBeFalsy();
    expect(component.items.some(i => i === newItem)).toBeTruthy();
    expect(component.items).toEqual(component.filteredList);
  });
});
