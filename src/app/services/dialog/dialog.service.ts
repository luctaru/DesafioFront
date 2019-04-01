import { Injectable, EventEmitter } from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { AppService } from '../connection/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormdialogComponent } from 'src/app/components/formdialog/formdialog.component';
import { PlandialogComponent } from 'src/app/components/plandialog/plandialog.component';
import { Plans } from 'src/app/interface/plans';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public emitt = new EventEmitter();
  plans: Array<Plans>;

  constructor(private service: AppService, private route: Router) {
    this.service.listPlans().subscribe(e => {
      this.plans = e;
    });
  }

  delDialog(dialog, id): void {
    const dialogRef = dialog.open(DialogComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (localStorage.getItem('types') === 'users') {
          this.service.delete('users', id).subscribe(() => {
            this.emitt.emit();
          });
        } else if (localStorage.getItem('types') === 'types') {
          this.service.delete('types', id).subscribe(() => {
            this.emitt.emit();
          });
        } else {

          this.service.deletePlan(id).subscribe(() => {
            this.plans.forEach(e => {
              if (e.parent === id) {
                setTimeout(() => {
                  this.service.deletePlan(e.id).subscribe();
                }, 200
                );
              }
            });
            this.emitt.emit();
          });
        }
      } else {
      }
    });
  }

  changeDialog(dialog, obj, stat) {
    const dialogRef = dialog.open(DialogComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        obj.status = stat;
        this.service.updatePlan(obj, obj.id).subscribe(() => {
          this.emitt.emit();
        });
      } else {
        alert('Canceled');
      }
    });
  }


  editDialog(dialog, obj) {
    const dialogRef = dialog.open(FormdialogComponent, {
      disableClose: true,
      data: {
        body: obj
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.closed) {
        if (result.data.id !== null) {

          this.service.update(result.data, localStorage.getItem('types')).subscribe(() => {
            this.emitt.emit();
          });
        } else {
          this.service.insert(result.data, localStorage.getItem('types')).subscribe(() => {
            this.emitt.emit();
          });
        }
      } else {
        alert('Canceled');
      }
    });
  }

  editPlanDialog(dialog, obj) {
    const dialogRef = dialog.open(PlandialogComponent, {
      disableClose: true,
      data: {
        body: obj
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.closed) {

        if (result.data.id !== null) {

          this.service.updatePlan(result.data, result.data.id).subscribe(() => {
            this.emitt.emit();
          });
        } else {
          this.service.insertPlan(result.data).subscribe((d: any) => {
            let pla: Plans;
            this.plans.forEach(e => {
              if (e.id === d.parent) {
                pla = e;
                if (pla.childs === null) {
                  pla.childs = [];
                }
                console.log(pla);
                pla.childs.push(d.id);
                console.log(pla);
                this.service.updateSubPlan(pla).subscribe(() => {
                  this.emitt.emit();
                });
                return;
              }
            });
            this.emitt.emit();
          });
        }
      } else {
        alert('Canceled');
      }
    });
  }
}
