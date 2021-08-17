import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalstorageService } from './services/localstorage.service';
import { RouterModule } from '@angular/router';
import { AddEditUserComponent } from './dashboard/add-edit-user/add-edit-user.component';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { LeftPanelComponent } from './shared/components/left-panel/left-panel.component';
import { SharedModule } from './modules/shared.module';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json' )
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HeaderComponent,
    // LeftPanelComponent,
    // DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    SharedModule,
    // MatDialogContent,
    TranslateModule.forRoot({
      loader:{
              provide : TranslateLoader,
              useFactory : HttpLoaderFactory,
        deps: [HttpClient]
    }
    }) 
  ],
  providers: [HttpClient , HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents : [AddEditUserComponent]
})
export class AppModule { }
