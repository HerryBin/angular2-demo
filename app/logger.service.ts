/**
 * Created by xianrongbin on 2017/4/16.
 */
import {Injectable} from '@angular/core';

/*
 *服务 是实现专一目的的逻辑单元
 *A注入了服务CServer，若B继承了A,则B可以直接使用CServer，但是也可以分层注入 ，即重新在B中注入
 * */
@Injectable()
export class LoggerService {
    constructor() {
    }

    debug(msg: string) {
        console.log(msg);
    }
}