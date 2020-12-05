import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BuyPageComponent } from "./buy-page/buy-page.component";

const routes: Routes = [
  { path: "", redirectTo: "productos", pathMatch: "full" },
  { path: "productos", component: BuyPageComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
