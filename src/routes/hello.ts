import { Router, Request, Response, NextFunction } from 'express';

class Hello {
    
    router: Router
    
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', this.get);
    }
    
    public get(req: Request, res: Response, next: NextFunction) {
        res.send("Hello World!");
    }

}

export default new Hello().router;