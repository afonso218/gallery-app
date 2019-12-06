import { PhotoComponent } from "./photo-gallery.component";
import { PhotoModel } from "src/app/models/photo.model";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("PhotoComponent", () => {
  let mock_data = {
    id: "10",
    title: "Title Photo",
    url: "https://picsum.photos/id/",
    views: 1234,
    likes: 99,
    unlikes: 11
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PhotoComponent]
    }).compileComponents();
  });

  it("photo title", () => {
    let component = TestBed.createComponent(PhotoComponent);
    component.componentInstance.data = mock_data;
    component.detectChanges();
    expect(component).toBeTruthy();

    let info = component.debugElement.nativeElement.querySelector(
      ".image-info > p"
    );
    expect(info).toBeDefined();
    expect(info.innerHTML).toContain("Title Photo");
  });

  it("photo play info (views)", () => {
    let component = TestBed.createComponent(PhotoComponent);
    component.componentInstance.data = mock_data;
    component.detectChanges();
    expect(component).toBeTruthy();

    let play_info = component.debugElement.nativeElement.querySelector(
      ".fa-play"
    );
    expect(play_info).toBeDefined();
    expect(play_info.innerHTML).toContain("1234");
  });

  it("photo likes", () => {
    let component = TestBed.createComponent(PhotoComponent);
    component.componentInstance.data = mock_data;
    component.detectChanges();
    expect(component).toBeTruthy();

    let play_thumbs_up = component.debugElement.nativeElement.querySelector(
      ".fa-thumbs-o-up"
    );
    expect(play_thumbs_up).toBeDefined();
    expect(play_thumbs_up.innerHTML).toContain("99");
  });

  it("photo unlikes", () => {
    let component = TestBed.createComponent(PhotoComponent);
    component.componentInstance.data = mock_data;
    component.detectChanges();
    expect(component).toBeTruthy();

    let play_thumbs_down = component.nativeElement.querySelector(
      ".fa-thumbs-o-down"
    );
    expect(play_thumbs_down).toBeDefined();
    expect(play_thumbs_down.innerHTML).toContain("11");
  });
});
