import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AppService } from 'src/app/services/connection/app.service';

@Component({
  selector: 'app-planlist',
  templateUrl: './planlist.component.html',
  styleUrls: ['./planlist.component.css'],
})
export class PlanlistComponent implements OnInit, OnDestroy {

  plan: any;
  user: any;
  plantype: any;

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor(
    private service: AppService
  ) {

  }

  ngOnInit() {
    this.render();
  }

  ngOnDestroy() {}

  render() {
    this.service.list('plans').subscribe(e => {
      this.plan = e;
    });
    this.service.list('users').subscribe(e => {
      this.user = e;
    });
    this.service.list('types').subscribe(e => {
      this.plantype = e;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
