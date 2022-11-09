import { Component, OnInit } from '@angular/core';
import {CartNotificationModel, CartNotificationService} from "../../../../services/cart-notification-service";

@Component({
  selector: 'app-cart-notification',
  templateUrl: './cart-notification.component.html',
  styleUrls: ['./cart-notification.component.css']
})
export class CartNotificationComponent {
  notifications: Set<CartNotificationModel> = new Set<CartNotificationModel>();

  constructor(private _notificationService: CartNotificationService) {
    this._notificationService.getNotifications()
      .subscribe((notification: CartNotificationModel)=> {
        this.notifications.add(notification);
        setTimeout(()=> {
          this.closeNotification(notification);
        }, 1300);
      });
  }

  public closeNotification(notification: CartNotificationModel) {
    this.notifications.delete(notification);
  }
}
