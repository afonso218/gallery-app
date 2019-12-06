import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PhotoModel } from "../models/photo.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  url = environment.gallery_api_endpoint;

  constructor(private httpClient: HttpClient) {}

  public getPhotos(
    page: number,
    number_results: number
  ): Promise<PhotoModel[]> {
    return this.httpClient
      .get<PhotoModel[]>(
        this.url + "/photos" + "?_page=" + page + "&_limit=" + number_results
      )
      .toPromise();
  }

  public getPhoto(id: String): Promise<PhotoModel> {
    return this.httpClient
      .get<PhotoModel>(this.url + "/photos/" + id)
      .toPromise();
  }
}
