import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoList } from './projeto-list';

describe('ProjetoList', () => {
  let component: ProjetoList;
  let fixture: ComponentFixture<ProjetoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
