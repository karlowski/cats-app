import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CatsPageService } from '../../cats-page/cats-page.service';
import { IBreed } from '../interfaces/breed.interface';

@Injectable({ providedIn: 'root' })
export class BreedsResolver implements Resolve<IBreed[]> {

  constructor(private catsService: CatsPageService) {}

  resolve(): Observable<IBreed[]> {
    return this.catsService.getAllBreeds();
  }
}
