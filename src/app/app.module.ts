import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule, MatInputModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { PhotoComponent } from "./gallery/photo-gallery/photo-gallery.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { PageNotFoundComponent } from "./components/error/pagenotfound.component";
import { PhotoDetailComponent } from "./gallery/photo-detail/photo-detail.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { AddPhotoComponent } from "./gallery/add-photo/add-photo.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";

export const routers: Routes = [
  { path: "gallery", component: GalleryComponent },
  { path: "gallery/photo/add", component: AddPhotoComponent },
  { path: "gallery/photo/:id", component: PhotoDetailComponent },
  { path: "", redirectTo: "/gallery", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
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
    NavigationBarComponent
  ],
  imports: [
    RouterModule.forRoot(routers),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
