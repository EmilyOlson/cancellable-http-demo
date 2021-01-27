
import { Injector } from '@angular/core';
import { UIRouter, StatesModule } from '@uirouter/angular';
import { DefaultComponent } from './default.component'
import { CancellableHttpComponent } from './components/cancellable-http-demo/cancellable-http-demo.component';
import { HomeComponent } from './components/home/home.component'
import { ObservableReplayComponent } from './components/observable-replay-demo/observable-replay-demo.component';

const defaultState = {
    name: 'default',
    url: '/',
    component: DefaultComponent,
};

const home = {
    name: 'default.home',
    url: 'home',
    component: HomeComponent,
}

const cancellableHttpDemo = {
    name: 'default.demo1',
    url: 'cancellable-http-demo',
    component: CancellableHttpComponent,
}

const observableReplayDemo = {
    name: 'default.demo2',
    url: 'observable-replay-demo',
    component: ObservableReplayComponent,
}



export function appConfig(router: UIRouter, injector: Injector, module: StatesModule) {
    router.urlService.rules.initial({ state: 'default' });
    module.states = [defaultState, home, cancellableHttpDemo, observableReplayDemo];
}