import {Component} from "@angular/core";
import { NavParams } from 'ionic-angular';
import {ProductService} from "../service/products.service";
@Component({
    selector:"my-content",
    templateUrl:"content.component.html"
})

export class ContentComponent{
    public id:number;
    public product:any=[];
     constructor(private navParams: NavParams,public serviceComponent:ProductService) {
        this.id = navParams.get("id");
        this.getContent(this.id);
    }
    getContent(id:number){
        this.serviceComponent.getProduct(id).subscribe((response:any)=>{
            this.product=response;
        });
    }
}