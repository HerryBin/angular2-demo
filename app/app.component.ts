/**
 * Created by xianrongbin on 2017/4/13.
 */
import {Component} from '@angular/core';

/*引入服务类*/
import {LoggerService} from './logger.service';

@Component({
    selector: 'my-app',
    templateUrl: '/app/template/app.component.html'
})


export class AppComponent {
    private greeting: string;
    private isShowMore: boolean;
    private msgToChild: string;
    private msgFromChild: string;

    constructor(private logger: LoggerService) {
    }

    ngOnInit() {
        this.greeting = 'Angular 2';
        this.msgToChild = 'message from parent';
        this.logger.debug('根组件初始化完毕喔~~~~');
    }

    receive(msg: string) {
        this.msgFromChild = msg;
    }
}