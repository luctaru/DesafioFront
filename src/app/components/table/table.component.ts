import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer,
  OnDestroy
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable, Subject, empty, Subscription } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { renderComponent } from '@angular/core/src/render3';
import { listenOnPlayer } from '@angular/animations/browser/src/render/shared';
import { User } from 'src/app/interface/user';
import { AppService } from 'src/app/services/connection/app.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  // error$ = new Subject<boolean>();
  // contacts$: Observable<Contact[]>;

  displayedColumns: string[] = [
  ];

  dataSource: MatTableDataSource<User>;
  selection = new SelectionModel<User>(true, []);
  array: Array<number> = [];
  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: AppService,
    private router: Router,
    private dialog: MatDialog,
    private dialogService: DialogService
    ) {
  }

  ngOnInit() {
    this.render();
    this.listen();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  listen() {
    this.subscription = this.dialogService.emitt.subscribe(() => {
      this.render();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  render() {
    if (localStorage.getItem('types') === 'users') {
      this.displayedColumns = [
        'name',
        'email',
        'edit',
        'delete'
      ];
      this.service.list('users').subscribe(e => {
        this.dataSource = new MatTableDataSource(e);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else if (localStorage.getItem('types') === 'types') {
      this.displayedColumns = [
        'name',
        'edit',
        'delete'
      ];
      this.service.list('types').subscribe(e => {
        this.dataSource = new MatTableDataSource(e);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  redirectToDelete = (id: string) => {
    this.dialogService.delDialog(this.dialog, id);
  }

  redirectToAdd = () => {
    localStorage.setItem('dialogFunc', 'add');
    this.dialogService.editDialog(this.dialog, null);
  }

  redirectToEdit = (e: any) => {
    localStorage.setItem('dialogFunc', 'edit');
    this.dialogService.editDialog(this.dialog, e);
  }
}
