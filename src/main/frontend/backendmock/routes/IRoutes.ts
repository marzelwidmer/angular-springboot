import {RequestHandler} from 'express-serve-static-core';
export interface IRoutes {
    getRoutes(): RequestHandler[];
}
