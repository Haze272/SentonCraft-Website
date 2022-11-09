import {HomeComponent} from "../components/pages/home/home.component";
import {PlayComponent} from "../components/pages/play/play.component";
import {RulesComponent} from "../components/pages/rules/rules.component";
import {ServersComponent} from "../components/pages/servers/servers.component";
import {ShopComponent} from "../components/pages/shop/shop.component";
import {CartComponent} from "../components/pages/cart/cart.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'play', component: PlayComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'server-list', component: ServersComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
