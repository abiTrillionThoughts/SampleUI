import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  addEditUserForm: FormGroup ;
  edit: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEditUserComponent>,
    public fb : FormBuilder
    ) {
      console.log('dialog' ,this.data );
      if(this.data){
        this.edit = true ;
        this.initializeForm(this.data.user)
      }else {
        this.initializeForm()
      }
  }

  ngOnInit(): void {
  }

  initializeForm(userDetails? : any){
    this.addEditUserForm=   this.fb.group({
      firstName:[userDetails ? userDetails.firstName : '' , [Validators.required] ],
      lastName:[userDetails ? userDetails.lastName : '' ,  []],
      phoneNo : [userDetails  ? userDetails.phoneNo : '' ,  [Validators.required , Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      email:[userDetails  ? userDetails.email : '' ,  [Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      gender:[userDetails ? userDetails.gender : ''],
      address : [userDetails  ? userDetails.address : '']
  }) 
}
add(){
  let data ={
    edit : this.edit,
    formValues : this.addEditUserForm.value,
    i : this.edit ?  this.data.i : ''
  }
  
  if(this.addEditUserForm.valid){
    this.dialogRef.close(data)
  }else{
    (Object as any).values(this.addEditUserForm.controls).forEach((control : any) => {
      control.markAsTouched();
    });
  }
}
close(){
  this.dialogRef.close()
}
}
