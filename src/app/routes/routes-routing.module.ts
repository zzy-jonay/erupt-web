import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {environment} from "@env/environment";
// layout
import {LayoutDefaultComponent} from "../layout/default/default.component";
import {LayoutPassportComponent} from "../layout/passport/passport.component";
// passport pages
import {UserLoginComponent} from "./passport/login/login.component";
// single pages
import {Exception403Component} from "./exception/403.component";
import {Exception404Component} from "./exception/404.component";
import {Exception500Component} from "./exception/500.component";
import {ChangePwdComponent} from "./change-pwd/change-pwd.component";
import {HomeComponent} from "./home/home.component";
import {SiteComponent} from "./site/site.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutDefaultComponent,
        children: [
            {path: "", component: HomeComponent, data: {title: "首页"}},
            {path: "site", component: SiteComponent},
            {path: "change-pwd", component: ChangePwdComponent, data: {title: "修改密码"}},
            {path: "layout/403", component: Exception403Component, data: {title: "403"}},
            {path: "layout/404", component: Exception404Component, data: {title: "404"}},
            {path: "layout/500", component: Exception500Component, data: {title: "500"}},
            {
                path: "build",
                loadChildren: () => import('../build/erupt/erupt.module').then(m => m.EruptModule),
            },
            {
                path: "bi/:name",
                loadChildren: () => import( "../build/bi/bi.module").then(m => m.BiModule),
                pathMatch: "full"
            },
            {
                path: "tpl/:name",
                loadChildren: () => import( "../build/tpl/tpl.module").then(m => m.TplModule),
                pathMatch: "full"
            }
        ]
    },
    // 全屏布局
    // passport
    {
        path: "passport",
        component: LayoutPassportComponent,
        children: [
            {path: "login", component: UserLoginComponent, data: {title: "登录"}},
            // {path: "register", component: UserRegisterComponent, data: {title: "注册", titleI18n: "register"}},
            // {
            //     path: "register-result",
            //     component: UserRegisterResultComponent,
            //     data: {title: "注册结果", titleI18n: "register-result"}
            // }
        ]
    },
    // 单页不包裹Layout
    // {path: "lock", component: UserLockComponent, data: {title: "锁屏", titleI18n: "lock"}},
    {path: "403", component: Exception403Component},
    {path: "404", component: Exception404Component},
    {path: "500", component: Exception500Component},
    {path: "**", redirectTo: ""}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: environment.useHash, onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class RouteRoutingModule {
}
