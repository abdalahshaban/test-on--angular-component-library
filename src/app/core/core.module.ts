import { SidePanelService } from './layouts/dashboard-layout/services/side-panel.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';



@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule
  ],
  providers: [SidePanelService],
  exports: [DashboardLayoutComponent]
})
export class CoreModule { }
