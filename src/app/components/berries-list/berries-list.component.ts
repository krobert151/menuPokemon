import { Component, OnInit } from '@angular/core';
import { Berry } from 'src/app/modals/berry/berry.module';
import { BerriesService } from 'src/app/service/berries.service';

@Component({
  selector: 'app-berries-list',
  templateUrl: './berries-list.component.html',
  styleUrls: ['./berries-list.component.css']
})
export class BerriesListComponent implements OnInit{
  ListBerries: Berry[] = [];
  
  constructor(private berriesService:BerriesService){}

  ngOnInit(): void {
    this.berriesService.getListBerries().subscribe(resp=>{
      this.ListBerries = resp.results;
    });

  }


}
