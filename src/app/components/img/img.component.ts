import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img = '';
  //Example set with typeScript
  @Input('image')
  set contentImage(newImage: string) {
    this.img = newImage;
  }
  @Output() loaded = new EventEmitter<string>();

  imageDefault =
    'https://st.depositphotos.com/1116329/5039/v/450/depositphotos_50398461-stock-illustration-vector-black-web-icon-on.jpg';

  // counter = 0;
  // counterFunction: number | undefined;

  //Life time of the components
  constructor() {
    //This is a constructor, this is used for initialize variables or change variables,
    //before this component render

    //one time execute, no petitions async

    console.log('constructor', 'Img_default: ', this.imageDefault);
  }

  ngOnChanges() {
    //This method run before and during render
    //Is used to listen changes in inputs
    //This execute all time before render deleted or change to another
    console.log('OnChanges, ImgDefault => ', this.imageDefault);
  }

  ngOnInit(): void {
    //This method run before render
    //In this method we are can methods async(petitions fetch or another)

    //This method run one time where init this component
    // this.counterFunction = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run set interval');
    // }, 1000);
    // console.log('OnInit, ImgDefault =>', this.imageDefault);
  }

  ngAfterViewInit() {
    //This method run after render
    //Is used to manage child (components to the template)
    console.log('AfterViewInit');
  }

  ngOnDestroy(): void {
    // This used to delete the component
    // window.clearInterval(this.counterFunction);
    // console.log('NgOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Send event child to parent');
    this.loaded.emit(this.img);
  }
}
