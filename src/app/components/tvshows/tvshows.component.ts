import { Component, OnInit } from '@angular/core';
import { TVShowService } from '../../services/tvshow.service';
import { TVShow } from '../../model/tvshow';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TVShowsComponent implements OnInit {

  constructor(
    private tvShowService: TVShowService
  ) { }

  // get shows() {
  //   return this.tvShowService.getShows();
  // }

  get shows(): Observable<TVShow[]> {
    return this.tvShowService.shows;
  }

  delete(tve: TVShow) {
    this.tvShowService.deleteShow(tve);
  }

  showDetails(tve: TVShow) {
    this.tvShowService.showDetails(tve);
  }

  ngOnInit() {
  }

}
