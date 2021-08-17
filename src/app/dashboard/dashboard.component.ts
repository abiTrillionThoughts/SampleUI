import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {

  }
  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNo', 'email', 'gender', 'address', 'more'];
  ELEMENT_DATA = [
    { firstName: 'fname1', lastName: 'lname1', phoneNo: '9876543210', email: 'test1@gmail.com', gender: 'male', address: 'test' },
    { firstName: 'fname2', lastName: 'lname2', phoneNo: '9876543210', email: 'test2@gmail.com', gender: 'female', address: 'test' },
    { firstName: 'fname3', lastName: 'lname3', phoneNo: '9876543210', email: 'test3@gmail.com', gender: 'female', address: 'test' },
    { firstName: 'fname4', lastName: 'lname4', phoneNo: '9876543210', email: 'test4@gmail.com', gender: 'male', address: 'test' },
    { firstName: 'fname5', lastName: 'lname5', phoneNo: '9876543210', email: 'test5@gmail.com', gender: 'male', address: 'test' },


  ]

  dataSource = (this.ELEMENT_DATA);


  ngOnInit(): void {


  }


  adduser() {
    const dia = this.dialog.open(AddEditUserComponent, {
      disableClose: true,
      width: '50vw',
    })
    dia.afterClosed().subscribe((res: any) => {
      const data =
        { firstName: res.formValues.firstName, lastName: res.formValues.lastName, phoneNo: res.formValues.phoneNo, email: res.formValues.email, gender: res.formValues.gender, address: res.formValues.address }
      this.ELEMENT_DATA.push(data);
      this.dataSource = [...this.ELEMENT_DATA];
    })
  }
  editUser(e: any, index: any) {
    const dia = this.dialog.open(AddEditUserComponent, {
      disableClose: true,
      width: '50vw',
      data: { user: e, i: index }
    })
    dia.afterClosed().subscribe((res: any) => {
      const data =
        { firstName: res.formValues.firstName, lastName: res.formValues.lastName, phoneNo: res.formValues.phoneNo, email: res.formValues.email, gender: res.formValues.gender, address: res.formValues.address }

      this.ELEMENT_DATA[res.i] = (data);
      this.dataSource = [...this.ELEMENT_DATA];
    })
  }

  deleteUser(e: any, index: any) {
    this.ELEMENT_DATA.splice(index , 1);
    this.dataSource = [...this.ELEMENT_DATA];
  }

}