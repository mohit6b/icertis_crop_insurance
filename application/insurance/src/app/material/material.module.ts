import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatTableModule} from '@angular/material';



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
    MatTableModule
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
    MatTableModule
  ]
})
export class MaterialModule { }
