import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoinPage } from './join.page';
import { FileUploadModule } from 'ng2-file-upload';


const routes: Routes = [
  {
    path: '',
    component: JoinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FileUploadModule
  ],
  declarations: [JoinPage]
})
export class JoinPageModule {}
