import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserDashboardRoutingModule } from "./user-dashboard-routing.module";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserProfileIconComponent } from "./user-profile-icon/user-profile-icon.component";

@NgModule({
  declarations: [UserDashboardComponent, UserProfileIconComponent],
  imports: [CommonModule, UserDashboardRoutingModule],
  exports: [UserDashboardComponent, UserProfileIconComponent],
})
export class UserDashboardModule {}
