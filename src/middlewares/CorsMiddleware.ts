import {Injectable, NestMiddleware} from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin as string);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  }
}
