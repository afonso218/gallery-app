import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/photos.api.service';
import { PhotoModel } from 'src/app/models/photo.model';
import { environment } from 'src/environments/environment';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
}

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css'],
})
export class PhotoDetailComponent implements OnInit {
  private photoWidth = environment.photo_max_width;
  private photoHeight = environment.photo_max_height;

  public isFetch = false;
  public data: PhotoModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.apiService
        .getPhoto(routeParams.id)
        .then((result) => {
          result.url = `${result.url}${result.id}/${this.photoWidth}/${this.photoHeight}`;
          this.data = result;
        })
        .finally(() => {
          this.isFetch = true;
        });
    });
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW && !!this.data.idNextPhoto) {
      this.router.navigate(['/gallery/photo/', this.data.idNextPhoto]);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW && !!this.data.idLastPhoto) {
      this.router.navigate(['/gallery/photo/', this.data.idLastPhoto]);
    }
  }
}
