import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  exports : [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
