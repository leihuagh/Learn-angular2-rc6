import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GreetingComponent } from './greeting/greeting.component';
import { MotionComponent } from './motion/motion.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [GreetingComponent],
    declarations: [GreetingComponent, MotionComponent],
    providers: []
})
export class HomeModule {}
