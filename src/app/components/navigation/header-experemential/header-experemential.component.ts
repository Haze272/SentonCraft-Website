import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-header-experemential',
  templateUrl: './header-experemential.component.html',
  styleUrls: ['./header-experemential.component.css']
})
export class HeaderExperementialComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
