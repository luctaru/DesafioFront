import { Injectable, EventEmitter } from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { AppService } from '../connection/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormdialogComponent } from 'src/app/components/formdialog/formdialog.component';
import { PlandialogComponent } from 'src/app/components/plandialog/plandialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public emitt = new EventEmitter();

  constructor(private service: AppService, private route: Router) {

   }

  delDialog(dialog, id): void {
    const dialogRef = dialog.open(DialogComponent, {
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
            this.emitt.emit();
          });
        }
      } else {
      }
    });
  }

  changeDialog(dialog, obj, stat) {
    const dialogRef = dialog.open(DialogComponent, {
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
      data: {
        body: obj
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.closed) {
        console.log(result.closed);
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
      data: {
        body: obj
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result.closed) {
      //   console.log(result.closed);
      //   if (result.data.id !== null) {

      //     this.service.update(result.data, localStorage.getItem('types')).subscribe(() => {
      //       this.emitt.emit();
      //     });
      //   } else {
      //     this.service.insert(result.data, localStorage.getItem('types')).subscribe(() => {
      //       this.emitt.emit();
      //     });
      //   }
      // } else {
      //   alert('Canceled');
      // }
    });
  }
}
