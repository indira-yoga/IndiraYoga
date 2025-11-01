import { Component, OnInit, inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-not-found",
  imports: [RouterLink],
  templateUrl: "./not-found.component.html",
  styleUrl: "./not-found.component.scss",
})
export class NotFoundComponent implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle("404 - Pagina Niet Gevonden | INDIRA Yoga");
    this.metaService.updateTag({
      name: "description",
      content: "De pagina die je zoekt kon niet worden gevonden. Ga terug naar de INDIRA homepagina om yoga lessen te ontdekken.",
    });
    this.metaService.updateTag({ name: "robots", content: "noindex, nofollow" });
  }
}
