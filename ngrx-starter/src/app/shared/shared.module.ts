import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ConfirmDirective } from './directives/confirm.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationComponent, ConfirmDirective],
  exports: [NavigationComponent, ConfirmDirective]
})
export class SharedModule { }