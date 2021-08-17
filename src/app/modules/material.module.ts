import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import {MatDialog, MatDialogClose, MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';


const materialComponents : any = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule ,
  MatMenuModule,
  MatIconModule,
  MatRadioModule
  // MatDialogModule,
  // MatDialog,
  // MatDialogContent,
  // MatDialogClose,

]


@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
