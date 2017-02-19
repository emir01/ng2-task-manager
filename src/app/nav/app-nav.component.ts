import {Component, OnInit} from "@angular/core"
import {Route} from "@angular/router";
import {routes} from "../app-routing.module"

@Component({
    moduleId:module.id,
    templateUrl:"./app-nav.component.html",
    selector:"app-nav"
})
export class AppNavComponent implements OnInit {
    // expose routed components to render menu items
    navs:Route[] = routes;

    ngOnInit(){
        this.navs.forEach(element => {
            console.log(element.data["title"]);
        });
        
    }
}