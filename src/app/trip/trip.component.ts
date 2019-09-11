import { Component, OnInit } from '@angular/core';
import { TripService } from '../Service/trip.service';
import { Tripinfo } from '../Model/tripinfo';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trips: Tripinfo[];

  constructor(private tripInfoService: TripService) { }

  ngOnInit() {
    this.tripInfoService.findAll().subscribe(data => {
      this.trips = data;
      console.log(this.trips);
    });
  }
  filter() {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }
}
