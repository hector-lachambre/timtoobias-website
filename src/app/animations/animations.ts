import { animate, animation, style } from '@angular/animations';


export const EnterAnimation = animation([
    style({transform: 'translateX({{ distance }})', opacity: 0}),
    animate('1s {{ delai }} ease-out')
]);

export const SlideDown = animation([
    style({height: 0, opacity: 0}),
    animate('0.5s ease')
]);

export const Slideup = animation([
    style({height: '*', opacity: 1}),
    animate('0.5s ease', style({height: 0, opacity:0}))
]);
