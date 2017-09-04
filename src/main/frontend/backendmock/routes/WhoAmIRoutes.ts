import * as express from 'express';
import {RequestHandler, Router} from 'express-serve-static-core';
import {IRoutes} from './IRoutes';
import { whoAmI } from '../common/whoAmI';


export class WhoAmIRoutes implements IRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  getRoutes(): RequestHandler[] {
    return [
      this.router.get('/',
        (req, res) => {
          res.send(whoAmI);
        })
    ];
  }
}
