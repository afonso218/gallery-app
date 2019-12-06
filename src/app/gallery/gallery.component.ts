import { Component, HostListener, AfterViewInit } from "@angular/core";
import { PhotoModel } from "../models/photo.model";
import { ApiService } from "../services/photos.api.service";

@Component({
  selector: "gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements AfterViewInit {
  MAX_RESULTS_PER_ROW = 4;

  page: number;
  photos: PhotoModel[];
  isLoading: boolean;
  isFull: boolean;
  results_to_load: number;

  constructor(private apiService: ApiService) {
    this.photos = [];
    this.isLoading = true;
    this.isFull = false;
    this.page = 1;
  }

  ngAfterViewInit(): void {
    this.load();
  }

  @HostListener("window:scroll", ["$event"])
  handleScrollEvent(event: Event): void {
    if (this.isToLoad()) {
      this.load();
    }
  }

  load() {
    this.isLoading = true;
    this.apiService
      .getPhotos(this.page, this.MAX_RESULTS_PER_ROW)
      .then(result => {
        result.forEach(element => {
          element.url += element.id + "/250/250";
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
      window.innerHeight + window.scrollY == document.body.scrollHeight
    );
  }
}
