import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  posts  = [
    {
      title: "Mon premier post  ",
      content: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      loveIts: 2,
      created_at: Date.now()

    },
    {
      title: "Mon deuxiéme post",
      content: "Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable",
      loveIts: -3,
      created_at: Date.now()

    },
    {
      title: "encor un post  ",
      content: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      loveIts:0,
      created_at: Date.now()

    }
  ];


}
