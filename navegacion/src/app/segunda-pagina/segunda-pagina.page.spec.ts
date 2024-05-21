import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegundaPaginaPage } from './segunda-pagina.page';

describe('SegundaPaginaPage', () => {
  let component: SegundaPaginaPage;
  let fixture: ComponentFixture<SegundaPaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
