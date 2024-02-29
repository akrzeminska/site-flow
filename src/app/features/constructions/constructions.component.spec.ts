import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ConstructionsComponent } from './constructions.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ConstructionsModule } from './constructions.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConstructionsService } from './services/constructions.service';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { Construction } from './models/construction.model';
import { mockConstructions } from './mock-data/constructions';


describe('ConstructionsComponent', () => {
  let component: ConstructionsComponent;
  let fixture: ComponentFixture<ConstructionsComponent>;
  let dialog: MatDialog;
  let constructionsService: ConstructionsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionsComponent],
      providers: [
        {provide: MatDialog, useValue: {}},
        {provide: MatSnackBar, useValue: {}},
        {provide: ConstructionsService, useClass: MockConstructionsService }
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
    constructionsService = TestBed.inject(ConstructionsService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('constructions service should be injected', inject([ConstructionsService], (service: ConstructionsService) => {
    expect(service).toBeTruthy();
  }));

  it('should initialize dataSource correctly', () => {
    expect(component.dataSource).toBeInstanceOf(MatTableDataSource);
  });

  it('should call getAllData method on ngOnInit', () => {
    spyOn(component, 'getAllData');
    component.ngOnInit();
    expect(component.getAllData).toHaveBeenCalled();
  });

  it('should call addNewConstruction method on button click', () => {
    spyOn(component, 'addNewConstruction'); //zmokowałam metodę add...
    const addButton = fixture.debugElement.nativeElement.querySelector('button'); //znajduję przycisk
    addButton.click(); //klikam przycisk
    fixture.detectChanges(); // aktualizuję widok po kliknięciu
    expect(component.addNewConstruction).toHaveBeenCalled(); //sprawzam czy metoda została wykonana
  });

  it('should fetch constructions data on ngOnInit', () => {
    const mockData: Construction[] = mockConstructions;

    spyOn(constructionsService, 'getAll').and.returnValue(of(mockData));

    component.ngOnInit();
    expect(component.dataSource.data).toEqual(mockData);
  });
});

class MockConstructionsService {
  getAll() {
      return of([]);
    }
  }
