import { Injectable, EventEmitter } from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { AppService } from '../connection/app.service';
import { ActivatedRoute, Router } from '@angular/router';


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
        if (localStorage.getItem('types') === 'false') {
          this.service.delete('users', id).subscribe(() => {
            this.emitt.emit();
          });
        } else {
          this.service.delete('types', id).subscribe(() => {
            this.emitt.emit();
          });
        }
      } else {
      }
    });
  }

  // editDialog(dialog, obj, id) {
  //   const dialogRef = dialog.open(DialogComponent, {
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       if (id) {
  //         this.service.update(obj, obj.isFavorite).subscribe(() => {
  //           this.emitt.emit();
  //         });
  //       } else {
  //         obj.isFavorite = false;
  //         this.service.insert(obj).subscribe(() => {
  //           this.emitt.emit();
  //         });
  //       }
  //     } else {
  //       alert('Canceled');
  //     }
  //   });
  // }
}
