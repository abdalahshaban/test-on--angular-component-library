import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AlertType, CardType, FlipAxis, ProgressBarFill, ProgressBarService, ToasterPosition, ToasterService, ToastType } from 'utility-lib07';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //alert 
  public AT = AlertType;
  public alertType: AlertType;
  public alertIsVisible: boolean;
  public alertMessage: string;
  public alertIconClass: string;
  public alertIsDismissible: boolean

  //progress bar
  public ProgressBarFill = ProgressBarFill;

  //toaster
  public ToasterPosition = ToasterPosition;
  public ToastType = ToastType;

  //card
  public CardType = CardType;

  //flip card;
  public FlipAxis = FlipAxis;

  constructor(private _progressBarService: ProgressBarService, private _toasterService: ToasterService) {
    //alert
    // this.alertType = AlertType.SUCCESS;
    // this.alertIsDismissible = false;
    // this.alertIsVisible = true;
    // this.alertMessage = 'This is an example alert with our new reusable component';
    // this.alertIconClass = 'fas fa-info-circle';
    // this.alertIsDismissible = true;

    //progress bar alert when complete

    this.alertType = AlertType.INFO;
    this.alertIsDismissible = false;
    this.alertMessage = 'Progress complete';
    this.alertIconClass = 'fas fa-info-circle';
    this.alertIsDismissible = false;

  }

  ngOnInit(): void {
    this._progressBarService.onProgressComplete()
      .pipe(take(1))
      .subscribe(complete => {
        if (complete) {
          this.alertIsVisible = true;
          setTimeout(() => this.alertIsVisible = false, 2000);
        }
      })
  }

  update() {
    this._progressBarService.updateProgress(25);
    setTimeout(() => this._progressBarService.updateProgress(50), 2000);
    setTimeout(() => this._progressBarService.updateProgress(70), 4000);
    setTimeout(() => this._progressBarService.updateProgress(100), 6000);
  }


  //toaster
  public sendToast(type: ToastType, duration?: number) {
    this._toasterService.toast("This is a test", type, duration);
  }

}
