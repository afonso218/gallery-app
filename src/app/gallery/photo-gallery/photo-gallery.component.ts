import { Component, Input } from "@angular/core";
import { PhotoModel } from "../../models/photo.model";

@Component({
  selector: "photo-gallery",
  templateUrl: "./photo-gallery.component.html",
  styleUrls: ["./photo-gallery.component.css"]
})
export class PhotoComponent {
  @Input("data") data: PhotoModel;
}
