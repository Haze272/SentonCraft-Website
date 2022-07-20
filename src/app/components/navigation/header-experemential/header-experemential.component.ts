import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginComponent} from "../../login/login.component";
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';

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

  openDialog(): void{
  }
}
