import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LeftPanelComponent } from '../shared/components/left-panel/left-panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [   
    HeaderComponent,
    LeftPanelComponent
  ],
  imports: [
    CommonModule,
    TranslateModule ,
    RouterModule
 
  ],
  exports:[
    HeaderComponent,
    LeftPanelComponent
  ]
})
export class SharedModule { }
