import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { ConstructionsService } from './services/constructions.service';
import { Construction } from 'src/app/models/construction.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss']
})
export class ConstructionsComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<Construction>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private seederService: LocalStorageSeederService, private constructionsService: ConstructionsService){
    seederService.ensureDataSeeder();
    this.dataSource = new MatTableDataSource<Construction>();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getAllData();
  }

  columns = [
    {
      columnDef: 'position',
      header: 'Nr',
      cell: (element: Construction) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Nazwa',
      cell: (element: Construction) => `${element.name}`,
    },
    {
      columnDef: 'location',
      header: 'Lokalizacja',
      cell: (element: Construction) => `${element.location}`,
    },
    {
      columnDef: 'client',
      header: 'Klient',
      cell: (element: Construction) => `${element.client}`,
    },
    {
      columnDef: 'cost',
      header: 'Kosztorys',
      cell: (element: Construction) => `${element.costEstimateId}`,
    },
    {
      columnDef: 'manager',
      header: 'Kierownik projektu',
      cell: (element: Construction) => `${element.manager}`,
    },
    {
      columnDef: 'contact',
      header: 'Kontakty',
      cell: (element: Construction) => `${element.contactId}`,
    },
    {
      columnDef: 'desription',
      header: 'Opis',
      cell: (element: Construction) => `${element.description}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Construction) => `${element.status}`,
    },
  ];

  
  displayedColumns = this.columns.map(c => c.columnDef);

  getDataById() {
    const constructionId: number = 1;

    this.constructionsService.getById(constructionId).subscribe((construction: any) => {
      if (construction) {
        this.dataSource.data = [construction];
      } else {
        console.log('Nie znaleziono konstrukcji o podanym id.');
      }
    });
  }

  getAllData() {
    this.constructionsService.getAll().subscribe((constructions: Array<Construction>) => {
      if (constructions) {
        this.dataSource.data = constructions;
      } else {
        console.log('Nie znaleziono konstrukcji o podanym id.');
      }
    });
  }
}