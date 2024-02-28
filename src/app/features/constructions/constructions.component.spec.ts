import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ConstructionsComponent } from './constructions.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ConstructionsModule } from './constructions.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConstructionsService } from './services/constructions.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';


describe('ConstructionsComponent', () => {
  let component: ConstructionsComponent;
  let fixture: ComponentFixture<ConstructionsComponent>;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionsComponent],
      providers: [
        {provide: MatDialog, useValue: {}},
        {provide: MatSnackBar, useValue: {}},
      ],
      imports: [
          MatFormFieldModule,
          MatPaginatorModule,
          ConstructionsModule,
          NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(ConstructionsComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('constructions service should be injected', inject([ConstructionsService], (service: ConstructionsService) => {
    expect(service).toBeTruthy();
  }))

  it('should initialize dataSource correctly', () => {
    expect(component.dataSource).toBeInstanceOf(MatTableDataSource);
  })

  it('should set paginator, sort and menu correctly after view initialization', () => {
    const mockPaginator: MatPaginator = {} as MatPaginator;
    const mockSort: MatSort = {} as MatSort;
    const mockMenu: MatMenuTrigger = {} as MatMenuTrigger;

    component.paginator = mockPaginator;
    component.sort = mockSort;
    component.menu = mockMenu;

    component.ngAfterViewInit();

    expect(component.dataSource.paginator).toBe(mockPaginator);
    expect(component.dataSource.sort).toBe(mockSort);

  })

  it('should call addNewConstruction method on button click', () => {
    spyOn(component, 'addNewConstruction'); //zmokowałam metodę add...
    const addButton = fixture.debugElement.nativeElement.querySelector('button'); //znajduję przycisk
    addButton.click(); //klikam przycisk
    fixture.detectChanges(); // aktualizuję widok po kliknięciu
    expect(component.addNewConstruction).toHaveBeenCalled(); //sprawzam czy metoda została wykonana
  });

});
