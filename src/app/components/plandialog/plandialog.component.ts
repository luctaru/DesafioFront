import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/connection/app.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormdialogComponent } from '../formdialog/formdialog.component';
import { Plans } from 'src/app/interface/plans';

@Component({
  selector: 'app-plandialog',
  templateUrl: './plandialog.component.html',
  styleUrls: ['./plandialog.component.css']
})
export class PlandialogComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  dialF = localStorage.getItem('dialogFunc');
  label = localStorage.getItem('types');
  userObj: object;

  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PlandialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      user: ['', Validators.required],
      beginData: [null],
      endData: [null],
      parent: [null],
      description: [null],
      stakeholders: [null],
      cost: ['', Validators.required],
      id: [null]
    });

    if (this.dialF === 'edit') {
      this.insertData(this.data.body);
    }
  }

  insertData(e) {
    this.service.getOnePlan(e).subscribe((d) => {
      this.userObj = d.user;
      console.log();
      const body = {
        name: d.name,
        type: d.type,
        user: d.user,
        status: d.status,
        beginData: d.beginData,
        endData: d.endData,
        parent: d.parent,
        childs: d.childs,
        description: d.description,
        stakeholders: d.stakeholders,
        cost: d.cost,
        id: d.id,
      };
      this.firstFormGroup.patchValue(body);
    });
  }

  save() {
    console.log(this.firstFormGroup.value);
    this.dialogRef.close({ data: this.firstFormGroup.value, closed: true });
  }
}
