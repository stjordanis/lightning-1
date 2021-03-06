import {expectType} from 'tsd';
import {Router} from 'express';
import {grpcRouter} from '../..';

expectType<Router>(grpcRouter({}));
expectType<Router>(grpcRouter({cert: '00'}));
expectType<Router>(grpcRouter({socket: 'socket'}));
expectType<Router>(grpcRouter({cert: '00', socket: 'socket'}));
