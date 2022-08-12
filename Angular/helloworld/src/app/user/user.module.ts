import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouteModule } from './user.routes';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRouteModule],
})
export class UserModule {}
