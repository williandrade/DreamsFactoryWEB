import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { TitleComponent } from './title/title.component';
import { MainIdeaCardComponent } from './main-idea-card/main-idea-card.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  declarations: [TitleComponent, MainIdeaCardComponent],
  exports: [TitleComponent, MainIdeaCardComponent]
})
export class CoreModule { }
