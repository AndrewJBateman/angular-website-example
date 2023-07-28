import { Component, Input } from '@angular/core';
import { Image } from '../models/image.model';
@Component({
	selector: 'app-image-block',
	templateUrl: './image-block.component.html',
})
export class ImageBlockComponent {
	@Input() image: Image;
}
