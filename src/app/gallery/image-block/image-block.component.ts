import { Component, Input } from '@angular/core';
import { Image } from '../models/image.model';
@Component({
    selector: 'app-image-block',
    templateUrl: './image-block.component.html',
    standalone: true,
})
export class ImageBlockComponent {
	@Input() image: Image;
}
