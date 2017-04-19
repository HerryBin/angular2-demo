/**
 * Created by xianrongbin on 2017/4/13.
 */
import 'reflect-metadata';
import 'zone.js';

import 'core-js/es6/reflect';
import 'core-js/es7/reflect';


// JiT启动模式
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success=>console.log('Bottstrap success'))
    .catch(error=>console.log(error));