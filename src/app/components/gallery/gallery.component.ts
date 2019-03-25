import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Response } from '../../interfaces/response';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, INgxGalleryImage } from 'ngx-gallery';
import { Asset } from 'src/app/interfaces/asset';
import { container } from '@angular/core/src/render3';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  providers: [ GalleryService ],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: Asset[] = [];
  displayImages: NgxGalleryImage[];
  filter: string;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.filter = '';
    this.galleryOptions = [
        {
          width: '80%',
          height: '90%',
          image: false,
          lazyLoading: true,
          imageInfinityMove: true,
          previewCloseOnClick: true,
          previewCloseOnEsc: true,
          previewKeyboardNavigation: true,
          arrowPrevIcon: 'fa fa-angle-left',
          arrowNextIcon: 'fa fa-angle-right',
          closeIcon: 'fa fa-times',
          previewBullets: true,
          thumbnailsOrder: 1,
          thumbnailsColumns: 3,
          thumbnailsRows: 3
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '538px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            preview: false,
            image: true,
            thumbnailsColumns: 3,
            thumbnailsRows: 1,
            imageSwipe: true,
            thumbnailsSwipe: true,
            thumbnailsRemainingCount: true
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false,
            image: true,
            thumbnailsColumns: 3,
            thumbnailsRows: 1,
            imageSwipe: true,
            thumbnailsSwipe: true,
            thumbnailsRemainingCount: true
        }
    ];
    this.galleryService.getAssets().subscribe((assets: Response) => {
      assets.images.forEach(asset => {
        this.galleryImages.push(asset);
      });
      this.buildGallery();
    });
  }

  buildGallery() {
    this.displayImages = [];
    this.galleryImages.forEach((asset: Asset) => {
      if (this.filter) {
        if (asset.name.includes(this.filter)) {
          this.displayImages.push(this.formatAsset(asset));
        }
      } else {
        this.displayImages.push(this.formatAsset(asset));
      }
    });
  }

  formatAsset(asset: Asset): INgxGalleryImage {
    const defaultUrl = 'https://drive.google.com/uc?export=view&id=';
    return ({
      small: defaultUrl + asset.id,
      medium: defaultUrl + asset.id,
      big: defaultUrl + asset.id
    });
  }

  setFilter(city: string) {
    this.filter = city;
    this.buildGallery();
  }
}
