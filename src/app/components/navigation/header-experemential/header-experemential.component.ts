import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginComponent} from "../../login/login.component";
import {DialogService} from "../../../services/dialog/dialog-service";


@Component({
  selector: 'app-header-experemential',
  templateUrl: './header-experemential.component.html',
  styleUrls: ['./header-experemential.component.css']
})
export class HeaderExperementialComponent {

  @Output() public sidenavToggle = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  constructor(private dialog: DialogService) {}

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, { data: 'John' });

    dialogRef.afterClosed().subscribe(() => {
      // Subscription runs after the dialog closes
      console.log('Dialog closed!');
    });
  }
}
