import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PolicyListComponent } from './ic/policy-list/policy-list.component';
import { PolicyBuyComponent } from './ic/policy-buy/policy-buy.component';
import { FileClaimComponent } from './ic/file-claim/file-claim.component';
import { ClaimStatusComponent } from './ic/claim-status/claim-status.component';
import { HttpClientModule } from '@angular/common/http';
import { TmpComponent } from './tmp/tmp.component';
import { CreatePolicyComponent } from './ic/create-policy/create-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PolicyListComponent,
    PolicyBuyComponent,
    FileClaimComponent,
    ClaimStatusComponent,
    TmpComponent,
    CreatePolicyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
