import { Component } from "@angular/core";
@Component
({
    selector:'app-banner',
    template:'<h1>{{title}}</h1>',
    styleUrls:['./banner.component.css']
})
export class BannerComponent
{
    title ='Test Tour of Heroes';
}