import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { Plans } from 'src/app/interface/plans';

@Component({
  selector: 'app-settingsbutton',
  templateUrl: './settingsbutton.component.html',
  styleUrls: ['./settingsbutton.component.css']
})
export class SettingsbuttonComponent implements OnInit {

 @Input() obj: Plans;

  constructor(
    private dialog: MatDialog,
    private dialogService: DialogService
  ) { }

  ngOnInit() {

  }

  editPlan() {
    localStorage.setItem('dialogFunc', 'edit');
    this.dialogService.editPlanDialog(this.dialog, this.obj);
  }

  delPlan() {
    console.log('sout', this.obj.id);
    this.dialogService.delDialog(this.dialog, this.obj.id);
  }

  changeStatus(stat) {
    switch (stat) {
      case 1:
        this.dialogService.changeDialog(this.dialog, this.obj, stat);
        break;
      case 2:
        this.dialogService.changeDialog(this.dialog, this.obj, stat);
        break;
      case 3:
        this.dialogService.changeDialog(this.dialog, this.obj, stat);
        break;
      case 4:
        this.dialogService.changeDialog(this.dialog, this.obj, stat);
        break;
    }
  }
}
