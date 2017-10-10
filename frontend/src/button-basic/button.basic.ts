import {Component, Input, Output, HostBinding, HostListener} from '@angular/core';;
import {CommonModule} from '@angular/common';

@Component({
    selector: 'ht-button-basic',
    templateUrl: './button-basic.html',
    styleUrls: [],
})
export class ButtonBsic{
    @Input() labelTxt: string;
    @HostListener('click', ['$event']) buttonClicked(event){console.log(event)}
}