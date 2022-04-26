import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page',
  templateUrl: 'glossario-desc.page.html',
  styleUrls: ['glossario-desc.page.scss'],
})
export class GlossarioDescPage implements OnInit {
  constructor(
    private routeParams: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    document.getElementById("menu-btn").onclick = () => window.location.href = "app";
    document.getElementById("back-btn").onclick = () => window.location.href = "glossary";

    const glossary = document.getElementById("glossary");

    fetch('http://192.168.0.62:8080/glossary')
    .then(res => {
        res.json()
        .then(data => {
            const id = this.routeParams.snapshot.params.id;
            const glossaryItem = data.find(item => item.id == id);

            glossary.innerHTML = "";
            glossary.innerHTML += `
                <div id="glossary">
                    <div class="header">
                        <h1>${glossaryItem.name}</h1>
                        <h2>${glossaryItem.type}</h2>
                    </div>
                    <p>
                        ${glossaryItem.description}
                    </p>
                </div>
            `;
        })
    });
  }
}
