import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SingleDoubleClickDirective } from './directives/single-double-click.directive';
import { NavigationSidePanelComponent } from './components/navigation-side-panel/navigation-side-panel.component';
import { GridContainerComponent } from './components/grid/grid-container/grid-container.component';
import { GridCellDirective } from './components/grid/grid-cell/grid-cell.directive';



@NgModule({
  declarations: [NavigationBarComponent, SingleDoubleClickDirective, NavigationSidePanelComponent, GridContainerComponent, GridCellDirective],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    GridCellDirective,
    NavigationBarComponent,
    NavigationSidePanelComponent,
    SingleDoubleClickDirective,
    GridContainerComponent,
    // AlertModule

  ]
})
export class SharedModule { }
