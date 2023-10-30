import { Component, Input } from '@angular/core';
import { Berry } from 'src/app/modals/berry/berry.module';

@Component({
  selector: 'app-berries-item',
  templateUrl: './berries-item.component.html',
  styleUrls: ['./berries-item.component.css']
})
export class BerriesItemComponent {

  @Input() berry!: Berry;

}
