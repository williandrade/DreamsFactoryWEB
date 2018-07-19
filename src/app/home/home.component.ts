import { Component, OnInit } from '@angular/core';
import { BasicResponse, HttpService } from '../core/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  topIdeas: Array<any>;

  constructor(private httpService: HttpService) {
    this.topIdeas = new Array<any>();
  }

  ngOnInit() {
    [1, 5, 10, 2, 3, 2, 3].forEach(item => {
      this.topIdeas.push({
        title: 'Title ' + item,
        text: 'This is the text guys ',
        likes: 2 + item,
        actions: [
          {
            name: 'TAKE A LOOK',
            func: function () {
              console.log('You clicked at 1');
            }
          }
        ]
      });
    });
    // this.httpService.get('/idea/top/4').subscribe(data => {
    //   if (data.success) {
    //     data.payLoad.forEach(function (val) {
    //       this.topIdeas.push({
    //         title: val.name,
    //         text: val.shortDescription,
    //         likes: val.qtdLike,
    //         actions: [
    //           {
    //             name: 'TAKE A LOOK',
    //             func: function () {
    //               console.log('You clicked at 1');
    //             }
    //           }
    //         ]
    //       });
    //     }, this);
    //   }
    // });
  }

}
