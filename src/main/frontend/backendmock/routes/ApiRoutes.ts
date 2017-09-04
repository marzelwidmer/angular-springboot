import * as express from 'express';
import {RequestHandler} from 'express-serve-static-core';
import {FamilyRoutes} from './FamilyRoutes';
import {Router} from 'express';
import {IRoutes} from './IRoutes';
import {nocache} from '../common/middleware';
import {WhoAmIRoutes} from './WhoAmIRoutes';


export class ApiRoutes implements IRoutes {
  private router: Router;
  private familyRoutes: FamilyRoutes;
  private whoAmI: WhoAmIRoutes;

  constructor() {
    this.router = express.Router();
    this.familyRoutes = new FamilyRoutes();
    this.whoAmI = new WhoAmIRoutes();
  }

  getRoutes(): RequestHandler[] {
    return [
      this.router.use(nocache),
      this.router.use('/partner', this.familyRoutes.getRoutes()),
      this.router.use('/whoami', this.whoAmI.getRoutes())
    ];
  }
}
