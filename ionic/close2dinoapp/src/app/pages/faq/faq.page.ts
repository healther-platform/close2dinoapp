import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-page',
  templateUrl: 'faq.page.html',
  styleUrls: ['faq.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqPage implements OnInit {
  input_search = "";
  input_pergunta = "";

  constructor() { }
  
  ngOnInit(): void {
    document.getElementById("menu-btn").onclick = () => window.location.href = "app";
    document.getElementById("back-btn").onclick = () => window.location.href = "app";
    document.getElementById("reload-btn").onclick = () => window.location.reload();

    function openModal() {
      document.getElementById("modal-pergunta").style.display = 'block';
      document.getElementById("modal-pergunta").style.pointerEvents = 'auto';

      setTimeout(function () {
        document.getElementById("modal-pergunta").style.opacity = '1';
      }, 50)

    }

    function handleClose() {
      closeModal();
    }

    function closeModal() {
      document.getElementById("modal-pergunta").style.opacity = '0';
      setTimeout(function () {
        document.getElementById("modal-pergunta").style.display = 'none';
      }, 500);
    }

    const handleSave = () => {
      const message = this.input_pergunta;

      fetch('http://192.168.0.62:8080/faq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: message })
      })
        .then(res => {
          closeModal();
          loadFaqData();
        })
        .catch(err => {
          alert(err);
        })
    }

    function openDescription(itemId) {
      const faqContent = document.querySelector("#faq-content #_" + itemId);
      faqContent.children[1].classList.toggle("item-content-open");
    }

    
    const loadFaqData = () => {
      const faqContent = document.getElementById("faq-content");
      fetch('http://192.168.0.62:8080/faq')
        .then(res => {
          res.json()
            .then(data => {
              function loadFaqWithTitle(title = '') {
                faqContent.innerHTML = "";
                for (let i in data) {
                  let item = data[i];
                  if (item.title.toLowerCase().startsWith(title.toLowerCase())) {
                    faqContent.innerHTML += `
                      <div class="item" id=_${i}>
                          <button>${item.title}</button>
                          <div class="item-content">
                              <p>${item.content ?? "Sua pergunta ainda não foi respondida."}</p>
                          </div>
                      </div>
                      `;

                      setTimeout(() => {
                        if (faqContent.children.length == 1) {
                          faqContent.children.item(0).children.item(0).addEventListener('click', () => openDescription(i)) 
                        }
                        else {
                          faqContent.children[i].children[0].addEventListener('click', () => openDescription(i)) 
                        }
                      }, 200);
                  }
                }
              }

              loadFaqWithTitle();

              const searchInput = document.getElementById("search").children[0];
              searchInput.addEventListener('keyup', (event) => {
                loadFaqWithTitle(this.input_search);
              })
            })
        });
    }

    loadFaqData();

    document.getElementById("_12345").onclick = () => openModal();
    document.getElementById("_56754").onclick = () => handleClose();
    document.getElementById("_32132").onclick = () => handleSave();
  }
}
