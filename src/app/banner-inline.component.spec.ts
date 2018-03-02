import { BannerComponent } from "./banner-inline.component";
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { async } from '@angular/core/testing';

describe('BannerComponent (inline template)',() => 
{
    let comp: BannerComponent;
    let fixture:ComponentFixture<BannerComponent>;
    let de:DebugElement;
    let el:HTMLElement;
    beforeEach(async
    (
        ()=>
        {
            TestBed.configureTestingModule(
            {
                declarations:[BannerComponent],

            }).compileComponents();//compile template and css;
        
        }
        //TestBed



    ))
    //TestBed.configureTestingModule方法返回TestBed类,
    //以便你可以链式调用TestBed的其它静态方法，

});