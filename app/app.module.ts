/**
 * Created by xianrongbin on 2017/4/13.
 */
/*
 * 核心模块 @angular/core
 * 通用模块 @angular/common
 * 表单模块 @angular/forms
 * 网络模块 @angular/http
 * */


import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent}  from './app.component';

/*自定义指令*/
import {HighlightDirective} from './highlight.directive';

/*服务的使用*/

import {LoggerService} from './logger.service';

/*子组件*/
import {ChildComponent} from './child.component';


@NgModule({
    /*包装组件或指令*/
    imports: [
        BrowserModule,
        FormsModule
    ],
    /*包装组件或指令*/
    declarations: [AppComponent, HighlightDirective, ChildComponent],
    /*依赖注入*/
    providers: [LoggerService],
    /*设置根组件*/
    bootstrap: [AppComponent]
})
export class AppModule {
    /**
     * 支持懒加载
     * 核心模块---》根模块 《----特性模块
     *                            ||
     *              共享模块--------
     * */
}
