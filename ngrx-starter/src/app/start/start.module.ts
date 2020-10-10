import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './container/start/start.component';

import { Routes, RouterModule } from '@angular/router';

export const startRoutes: Routes = [{ path: '', component: StartComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(startRoutes)],
  exports: [],
  declarations: [StartComponent],
  providers: []
})
export class StartModule {}