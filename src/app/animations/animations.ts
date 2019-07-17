import { animate, animation, style } from '@angular/animations';


export const EnterAnimation = animation([
    style({transform: 'translateX({{ distance }})', opacity: 0}),
    animate('1s {{ delai }} ease-out')
]);
