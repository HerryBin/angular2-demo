/**
 * Created by xianrongbin on 2017/4/16.
 */
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: "[highlight]"
})
export class HighlightDirective {
    /*如果运行报错 注意tsconfig.json配置*/
    constructor(
        private el: ElementRef,
        private renderer: Renderer
    ) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#ff42d2');
    }
}
