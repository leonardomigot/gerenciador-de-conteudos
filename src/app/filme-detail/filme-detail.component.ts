import { Component, Input, OnInit } from '@angular/core';
import { Filme } from '../filme';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FilmeSerService } from '../filme-ser.service';


@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.component.html',
  styleUrls: ['./filme-detail.component.css']
})
export class FilmeDetailComponent implements OnInit {

  // @Input() filme?: Filme;

  filme: Filme | undefined;

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeSerService,
    private location: Location
  ) {}

  getFilme(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.filmeService.getFilme(id)
      .subscribe(filme => this.filme = filme);
  }

  ngOnInit(): void {
    this.getFilme();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.filme) {
      this.filmeService.updateFilme(this.filme)
        .subscribe(() => this.goBack());
    }
  }
}
