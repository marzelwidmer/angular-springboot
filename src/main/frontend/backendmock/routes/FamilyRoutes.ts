import * as express from 'express';
import { RequestHandler, Router } from 'express-serve-static-core';
import { IRoutes } from './IRoutes';
import { partnerMock } from '../common/partner';


export class FamilyRoutes implements IRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  getRoutes(): RequestHandler[] {
    return [
      this.router.get('/',
        (req, res) => {
          res.send(partnerMock);
        }),
      this.router.get('/favor',
        (req, res) => {
          res.send(partnerMock);
        }),
    ];
  }
}
