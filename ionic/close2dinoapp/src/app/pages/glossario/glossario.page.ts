import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-page',
  templateUrl: 'glossario.page.html',
  styleUrls: ['glossario.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlossarioPage implements OnInit {
  search = "";
  constructor() {}
  

  ngOnInit(): void {
    document.getElementById("menu-btn").onclick = () => window.location.href = "app";
    document.getElementById("back-btn").onclick = () => window.location.href = "app";
    document.getElementById("reload-btn").onclick = () => window.location.reload();

    

    fetch('http://192.168.0.62:8080/glossary')
    .then(res => {
        res.json()
        .then(data => {
            function openDescription(itemId) {
              const glossaryContent = document.querySelector("#glossary-content #_" + itemId);
              glossaryContent.children[1].classList.toggle("item-content-open");
            }

            function loadGlossaryWithName(name='') {
                const glossaryContent = document.getElementById("glossary-content");
                glossaryContent.innerHTML = "";
                for (let i in data) {
                    let item = data[i];

                    if (item.name.toLowerCase().startsWith(name.toLowerCase())) {
                        glossaryContent.innerHTML += `
                        <div class="item" id=_${i}>
                            <button>${item.name}</button>
                            <div class="item-content">
                                <h3>${item.type}</h3>
                                <p>${item.description}</p>
                                <a href="glossary-desc/${item.id}">Leia mais</a>
                            </div>
                        </div>
                        `;

                        setTimeout(() => {
                          if (glossaryContent.children.length == 1) {
                            glossaryContent.children.item(0).children.item(0).addEventListener('click', () => openDescription(i)) 
                          }
                          else {
                            glossaryContent.children[i].children[0].addEventListener('click', () => openDescription(i)) 
                          }
                        }, 200);
                    }
                }
            }
    
            loadGlossaryWithName();

            const searchInput = document.getElementById("search").children[0];
            searchInput.addEventListener('keyup', (event) => {
                loadGlossaryWithName(this.search);
            })
        })
    });
  }
}
