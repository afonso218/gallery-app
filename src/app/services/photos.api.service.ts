import { Injectable } from '@angular/core';
import { MOCK_PHOTOS_DATA } from './photos.api.mock';
import { PhotoModel } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public async getPhotos(page: number, results: number): Promise<PhotoModel[]> {
    const searchResults = MOCK_PHOTOS_DATA.slice(
      page * results - 1,
      page * results + results
    );
    return [...searchResults];
  }

  public async getPhoto(id: string): Promise<PhotoModel> {
    return [...MOCK_PHOTOS_DATA].find((photo: PhotoModel) => photo.id === id);
  }
}
