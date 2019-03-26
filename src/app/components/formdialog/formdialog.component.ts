import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/connection/app.service';

@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrls: ['./formdialog.component.css']
})
export class FormdialogComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  dialF = localStorage.getItem('dialogFunc');
  label = localStorage.getItem('types');
  secondCtrl = null;

  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FormdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

  }

  ngOnInit() {
    if (localStorage.getItem('types') === 'users') {
      this.secondCtrl = 'email';
      this.firstFormGroup = this.formBuilder.group({
        id: [null],
        name: ['', Validators.required],
        email: ['', Validators.required]
      });
    } else {
      this.secondCtrl = 'description';
      this.firstFormGroup = this.formBuilder.group({
        id: [null],
        name: ['', Validators.required],
        description: ['', Validators.required]
      });
    }
    if (this.dialF === 'edit') {
      this.insertData(this.data.body);
    }
  }

  insertData(e) {
    this.service.getOne(e, localStorage.getItem('types')).subscribe(d => {
      this.firstFormGroup.patchValue(d);
    });
  }

  save() {
    this.dialogRef.close({data: this.firstFormGroup.value, closed: true});
  }
}
