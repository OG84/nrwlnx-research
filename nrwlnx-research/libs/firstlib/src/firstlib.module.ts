import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTimerComponent } from './reusable-timer/reusable-timer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ReusableTimerComponent],
  exports: [ReusableTimerComponent]
})
export class FirstlibModule {}
