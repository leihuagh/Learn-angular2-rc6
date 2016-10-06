import { NgModule } from '@angular/core';
import { CarComponent } from './car/car.component';
import { WheelComponent } from './wheel/wheel.component';

@NgModule({
    imports: [],
    exports: [CarComponent],
    declarations: [
        CarComponent,
        WheelComponent
    ],
    providers: []
})
export class CarModule {}
