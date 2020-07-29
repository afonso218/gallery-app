import { AfterViewInit, Component, HostListener } from '@angular/core';

import { ApiService } from '../services/photos.api.service';
import { PhotoModel } from '../models/photo.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements AfterViewInit {
  private photoWidth = environment.photo_min_width;
  private photoHeight = environment.photo_min_height;
  private MAX_RESULTS_PER_ROW = environment.photos_per_row;

  public page: number;
  public photos: PhotoModel[];
  public isLoading: boolean;
  public isFull: boolean;

  constructor(private apiService: ApiService) {
    this.photos = [];
    this.isLoading = true;
    this.isFull = false;
    this.page = 1;
  }

  ngAfterViewInit(): void {
    this.load();
  }

  @HostListener('window:scroll', ['$event'])
  handleScrollEvent(event: Event): void {
    if (this.isToLoad()) {
      this.load();
    }
  }

  load() {
    this.isLoading = true;
    this.apiService
      .getPhotos(this.page, this.MAX_RESULTS_PER_ROW)
      .then((result) => {
        result.forEach((element) => {
          element.url = `${element.url}${element.id}/${this.photoWidth}/${this.photoHeight}`;
          this.photos.push(element);
        });
        if (result.length < this.MAX_RESULTS_PER_ROW) {
          this.isFull = true;
        }
        this.page += 1;
      })
      .catch(() => {
        this.isFull = true;
      })
      .finally(() => {
        this.isLoading = false;
        if (this.isToLoad()) {
          this.load();
        }
      });
  }

  private isToLoad(): boolean {
    return (
      !this.isFull &&
      !this.isLoading &&
      window.innerHeight + window.scrollY === document.body.scrollHeight
    );
  }
}
