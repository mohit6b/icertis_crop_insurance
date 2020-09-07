import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatDividerModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
