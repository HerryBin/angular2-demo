/**
 * Created by xianrongbin on 2017/4/16.
 */
/**
 * 子组件
 * */

/**
 *     组件具有全生命周期支持
 *
 * Constructor : 构造器初始化
 *        ||
 * OnChanges   : 第一次触发数据变化钩子
 *        ||
 * OnInit      : 组件初始化
 *        ||
 * OnChanges   : 运行期间触发数据变化钩子
 *        ||
 * OnDestroy   : 组件销毁前
 *
 * */


/*
 * ng2 tab键快捷键
 * */

import {Component, Input, Output, EventEmitter} from '@angular/core';

/*装饰器 赋予一个类更丰富的信息，让angular知道这个类是一个组件 reflect-metadata库*/
@Component({
    /*元数据*/
    selector: 'my-child',
    templateUrl: './app/template/child.component.html'
})

/*自身带有模板的指令*/

/*组件类*/
export class ChildComponent {

    /*从外界传入的信息*/
    @Input() private message: string;

    /*装饰器*/
    @Output() private outer = new EventEmitter<string>();

    constructor() {
    }

    sendToParent() {
        this.outer.emit('message from child');
    }
}
