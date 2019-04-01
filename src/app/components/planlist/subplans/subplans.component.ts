import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AppService } from 'src/app/services/connection/app.service';
import { isNgTemplate } from '@angular/compiler';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-subplans',
  templateUrl: './subplans.component.html',
  styleUrls: ['./subplans.component.css']
})
export class SubplansComponent implements OnInit {

  @Input() itemid: number;
  @Input() sub: Array<any>;
  arraySub: Array<any> = [];

  constructor(
    private service: AppService
  ) { }

  ngOnInit() {
    this.render();
  }

  render() {
    this.arraySub = [];
    if (this.sub !== null) {
      this.service.listPlans().subscribe(e => {
        e.map(d => {
          for (let i of this.sub) {
            if (d.id === i) {
              this.arraySub.push(d);
            }
          }
        });
      });
    }
    // this.sub.map(e => {
    //   if (this.itemid === e.parent) {
    //     this.arraySub.push(e);
    //   }
    // });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // let aux;
      // let auxCurrent;
      // let x: any;
      // for (x of event.container.data) {
      //   if (event.previousIndex === x.id) {
      //     aux = x;
      //   }
      //   if (event.currentIndex === x.id) {
      //     auxCurrent = x;
      //   }
      // }
      // this.service.updatePlan(auxCurrent, aux.id).subscribe(() => {
      //   this.service.updatePlan(aux, auxCurrent.id).subscribe();
      // });


      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
