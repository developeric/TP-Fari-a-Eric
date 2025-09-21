import { Router } from "express";
import { routerArticle } from "./article.routes.js";
import { routerArticleTag } from "./articleTag.routes.js";
import { routerTag } from "./tag.routes.js";
import { routerAuth } from "./auth.routes.js";
import { routerProfile } from "./profile.routes.js";
import { routerUser } from "./user.routes.js";

export const Allroutes = Router();

//Routes
Allroutes.use(routerAuth);
Allroutes.use(routerArticle);
Allroutes.use(routerArticleTag);
Allroutes.use(routerTag);
Allroutes.use(routerProfile);
Allroutes.use(routerUser)
