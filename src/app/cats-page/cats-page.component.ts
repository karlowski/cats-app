import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { CatsPageService } from './cats-page.service';
import { IBreed } from '../shared/interfaces/breed.interface';
import { ICat } from '../shared/interfaces/cat.interface';
import { IFilter } from '../shared/interfaces/filter.interface';
import { IParams } from '../shared/interfaces/params.interface';

@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.css']
})
export class CatsPageComponent implements OnInit, AfterViewInit {
  form = new FormGroup({
    breed: new FormControl(null),
    amount: new FormControl(null),
    allCatsShown: new FormControl(null)
  });

  cats$: Observable<ICat[]> = this.form.valueChanges.pipe(switchMap((filters) => {
    return this.catsService.getCatsByParams(this.prepareParams(filters));
  }));

  breeds: IBreed[] = this.activatedRoute.snapshot.data['breeds'];
  catsPerPage = [5, 10, 20, 40, 50];
  defaultFilters: IFilter = {
    breed: '',
    amount: 10,
    allCatsShown: true
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private catsService: CatsPageService) {
  }

  private prepareParams(filter: IFilter): IParams {
    return filter.allCatsShown ? { limit: filter.amount } : { breed_ids: filter.breed, limit: filter.amount };
  }

  ngOnInit(): void {
    this.form.patchValue(this.defaultFilters);
  }

  ngAfterViewInit() {
    this.form.updateValueAndValidity();
  }
}
