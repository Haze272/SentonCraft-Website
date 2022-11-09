import {Component, Inject} from '@angular/core';
import {DialogService} from "../../../services/dialog/dialog-service";
import {DialogRef} from "../../../services/dialog/dialog-ref";
import {DIALOG_DATA} from "../../../services/dialog/dialog-tokens";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private dialog: DialogService,
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: string
  ) {}

  close() {
    this.dialogRef.close();
  }
  /*
  openRegistration() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegistrationComponent, { data: 'John' });

    dialogRef.afterClosed().subscribe(() => {
      // Subscription runs after the dialog closes
      console.log('Dialog closed!');
    });
  }
  */
}
