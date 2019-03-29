import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/connection/app.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormdialogComponent } from '../formdialog/formdialog.component';
import { Plans } from 'src/app/interface/plans';
import { User } from 'src/app/interface/user';

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
  userObj: any;
  typeArray: Array<User>;
  userArray: Array<User>;
  planArray: Array<Plans>;
  temp: object;

  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PlandialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data.body);
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
      this.firstFormGroup.patchValue(this.data.body);
    }

    this.typeList();
    this.userList();
    this.planList();
  }

  typeList() {
    this.service.list('types').subscribe(e => {
      this.typeArray = e;
    });
  }

  userList() {
    this.service.list('users').subscribe(e => {
      this.userArray = e;
    });
  }

  planList() {
    this.service.listPlans().subscribe(e => {
      this.planArray = e;
    });
  }

  save() {
    console.log('data', this.data);
    if (this.data.body !== null) {
      this.temp = {
        ...this.firstFormGroup.value,
        status: this.data.body.status
      };
    } else {
      this.temp = this.firstFormGroup.value;
    }

    console.log(this.temp);
    this.dialogRef.close({ data: this.temp, closed: true });
  }
}
