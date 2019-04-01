import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/connection/app.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormdialogComponent } from '../formdialog/formdialog.component';
import { Plans } from 'src/app/interface/plans';
import { User } from 'src/app/interface/user';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-plandialog',
  templateUrl: './plandialog.component.html',
  styleUrls: ['./plandialog.component.css']
})
export class PlandialogComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dialF = localStorage.getItem('dialogFunc');
  label = localStorage.getItem('types');
  userObj: any;
  typeArray: Array<User>;
  userArray: Array<User>;
  planArray: Array<Plans>;
  temp: Plans;

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
      id: [null]
    });

    this.secondFormGroup = this.formBuilder.group({
      description: [null],
      stakeholders: [null],
      cost: ['', Validators.required],
    });

    if (this.dialF === 'edit') {
      this.firstFormGroup.patchValue(this.data.body);
      this.secondFormGroup.patchValue(this.data.body);
    }

    this.typeList();
    this.userList();
    this.planList();
  }

  typeList() {
    this.service.list('types').subscribe(e => {
      this.typeArray = [];
      this.typeArray = e;
    });
  }

  userList() {
    this.service.list('users').subscribe(e => {
      this.userArray = [];
      this.userArray = e;
    });
  }

  planList() {
    this.service.listPlans().subscribe(e => {
      this.planArray = [];
      this.planArray = e;
    });
  }

  save() {
    if (this.data.body !== null) {
      this.temp = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
        status: this.data.body.status,
        childs: this.data.body.childs
      };
    } else {
      this.temp = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value
      };
    }
    this.dialogRef.close({ data: this.temp, closed: true });
  }
}
