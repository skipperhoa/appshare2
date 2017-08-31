import { Component,ViewChild,OnInit} from '@angular/core';
import {ProductService} from '../service/products.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { App, MenuController,NavController,Slides,LoadingController } from 'ionic-angular';
import {ContentComponent} from "../content/content.component";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  public datas:any=[];
   @ViewChild(Slides) slides: Slides;
  constructor(public serviceComponent:ProductService,public navCtrl: NavController,app: App, menu: MenuController,public loadingCtrl:LoadingController) {
    menu.enable(true);
    this.presentLoading();
  }
  ngOnInit(){
    this.serviceComponent.getAll().subscribe((response:any)=>{
            this.datas = response;
            
        });
        return this.datas;
  }
   //loading
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  //su kien slide
   slideChanged() {
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
      
   }
    // public datas:any=[
    //   {
    //     id:1,
    //     title:"The Arrow 2011",
    //     content:"This time to run this Ionic 2 Slides app on the real iOS and Android devices",
    //     image:"../../assets/images/hinh1.jpg"

    //   },
    //   {
    //     id:2,
    //     title:"The Arrow 2012",
    //     content:"This time to run this Ionic 2 Slides app on the real iOS and Android devices",
    //      image:"../../assets/images/hinh2.jpg"

    //   },
    //   {
    //     id:3,
    //     title:"The Arrow 2013",
    //     content:"This time to run this Ionic 2 Slides app on the real iOS and Android devices",
    //      image:"../../assets/images/hinh1.jpg"

    //   },
    //   {
    //     id:4,
    //     title:"The Arrow 2014",
    //     content:"This time to run this Ionic 2 Slides app on the real iOS and Android devices",
    //      image:"../../assets/images/hinh2.jpg"

    //   }
    // ];

    clickContent(idTT:number){
        console.log("content:"+idTT);
        this.navCtrl.push(ContentComponent, {
            id: idTT
          });
    }

}
