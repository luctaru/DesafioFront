import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AppService } from 'src/app/services/connection/app.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { Plans } from 'src/app/interface/plans';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/services/dialog/dialog.service';

// /** Flat node with expandable and level information */
// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//     type: string;
//     user: object;
//     status: number;
//     beginData: string;
//     endData: string;
//     childs: Array<any>;
//     description: string;
//     stakeholders: Array<any>;
//     cost: number;
//     id: number;
//   level: number;
// }



@Component({
  selector: 'app-planlist',
  templateUrl: './planlist.component.html',
  styleUrls: ['./planlist.component.css'],
})

export class PlanlistComponent implements OnInit, OnDestroy {

  plan: any;
  planStatusZero: Array<any> = [];
  planStatusOne: Array<any> = [];
  planStatusTwo: Array<any> = [];
  planStatusThree: Array<any> = [];
  planStatusFour: Array<any> = [];
  user: any;
  plantype: any;
  subscription: Subscription;
  varia: Array<any> = [];

  constructor(
    private service: AppService,
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

  render() {
    this.service.listPlans().subscribe(e => {
      this.plan = e;
      e.map(s => {
        switch (s.status) {
          case 0:
            this.planStatusZero.push(s);
            break;
          case 1:
            this.planStatusOne.push(s);
            break;
          case 2:
            this.planStatusTwo.push(s);
            break;
          case 3:
            this.planStatusThree.push(s);
            break;
          case 4:
            this.planStatusFour.push(s);
            break;
          default:
            break;
        }
      });
    });
    this.service.list('users').subscribe(e => {
      this.user = e;
    });
    this.service.list('types').subscribe(e => {
      this.plantype = e;
    });
  }

  listen() {
    this.subscription = this.dialogService.emitt.subscribe(() => {
      this.render();
    });
  }

  addPlan() {
    localStorage.setItem('dialogFunc', 'add');
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
      // this.service.updatePlan(auxCurrent, aux.id).subscribe();
      // this.service.updatePlan(aux, auxCurrent.id).subscribe();
      // console.log(aux);
      // console.log(auxCurrent);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
