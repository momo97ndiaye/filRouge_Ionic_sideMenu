import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appParallaxHeader]'
})
export class ParallaxHeaderDirective {
  header:any
  headerHeight:number
  moveImage:number
  scaleImage:number

  constructor(public el:ElementRef,public renderer:Renderer2,private domCtrl:DomController) {
    let content =this.el.nativeElement
    this.header = content.getElementsByClassName('para-image')[0];
    this.domCtrl.read(()=>{
      this.headerHeight = this.header.clientHeight
      console.log('height:',this.headerHeight)
    })
   }
   @HostListener('ionScroll',['$event']) onContentScroll($event){
    //console.log('EVENT:',$event)
    const scrollTop=$event.detail.scrollTop
    console.log('SCROLL:',scrollTop)

    this.domCtrl.write(()=>{
      if(scrollTop > 0){
        this.moveImage=scrollTop/2
        this.scaleImage=1
      }else{
        
      }
      this.renderer.setStyle(this.header,'webkitTransform',)
    })
   }

}
