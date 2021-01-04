import { Component } from '@angular/core';
import { OverlayLoaderStyle, SpinnerSize } from 'utility-lib07';
import { DashboardLayoutConfiguration, SidePanelPosition, SidePanelState } from './core';
import { NavigationLink } from './shared/components/navigation-side-panel/navigation-link.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dashboard-template';
  public configuration: DashboardLayoutConfiguration;
  public links: NavigationLink[];

  public isLoading: boolean;
  public overlayStyle: OverlayLoaderStyle;
  public spinnerSize: SpinnerSize;

  constructor() {
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT,
      SidePanelState.OPEN
    );
    this.createLinks();

    //loader
    this.spinnerSize = SpinnerSize.MEDIUM;
    this.overlayStyle = OverlayLoaderStyle.DIM_DARK;
    this.isLoading = true

    setTimeout(() => {
      this.isLoading = false
    }, 3000);
  }

  private createLinks() {
    this.links = [
      new NavigationLink("Home", ['home'], "fas fa-home"),
      new NavigationLink("Dashboard", ['dashbaord'], "fas fa-tachometer-alt"),
      new NavigationLink("Account Info", ['account'], "fas fa-user-circle")
    ]
  }
}
