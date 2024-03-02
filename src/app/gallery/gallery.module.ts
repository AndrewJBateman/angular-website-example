import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ImageBlockComponent } from './image-block/image-block.component';

@NgModule({
    imports: [CommonModule, GalleryRoutingModule, GalleryPageComponent, ImageBlockComponent],
})
export class GalleryModule {}
