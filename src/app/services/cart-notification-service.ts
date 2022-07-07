import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class CartNotificationService {
  private notifications: Subject<CartNotificationModel> = new Subject<CartNotificationModel>();

  public getNotifications(): Subject<CartNotificationModel> {
    return this.notifications;
  }

  public showToast(info: CartNotificationModel) {
    this.notifications.next(info);
  }
}

export class CartNotificationModel {
  public header: string;
  public description: string;

  constructor(header: string, description: string) {
    this.header      = header;
    this.description = description;
  }
}
