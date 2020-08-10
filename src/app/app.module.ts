import { RouterModule, Routes } from '@angular/router';

import { AddPhotoComponent } from './gallery/add-photo/add-photo.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/error/pageNotFound.component';
import { PhotoComponent } from './gallery/photo-gallery/photo-gallery.component';
import { PhotoDetailComponent } from './gallery/photo-detail/photo-detail.component';

export const routers: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/photo/add', component: AddPhotoComponent },
  { path: 'gallery/photo/:id', component: PhotoDetailComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PhotoComponent,
    PhotoDetailComponent,
    PageNotFoundComponent,
    LoadingComponent,
    AddPhotoComponent,
    NavigationBarComponent,
  ],
  imports: [
    RouterModule.forRoot(routers),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
