document.getElementById("menu-btn").onclick = () => window.location.href = "/app.html";
    document.getElementById("back-btn").onclick = () => window.location.href = "/app.html";
    document.getElementById("reload-btn").onclick = () => window.location.reload();
  
    function openDescription(itemId) {
        const glossaryContent = document.getElementById("glossary-content");
        glossaryContent.children[itemId].children[1].classList.toggle("item-content-open");
    }
  
    
  
    /*const data = [
        {
            id: 1, 
            name: 'Adenomegalia', 
            type: 'Condição', 
            description: 'Linfonodos ou gânglios aumentados, também conhecidos como ínguas.',
            content: 'Adenomegalia é o aumento dos linfonodos (ínguas). Pode estar presente em crianças e, na maior parte dos casos, é causada por infecções virais. Mais raramente podem ser causadas por doenças oncológicas tais como leucemias ou linfomas.'
        },
        {
            id: 2, 
            name: 'Alopécia', 
            type: 'Condição', 
            description: 'Queda de cabelos',
            content: 'A alopécia é a perda de cabelos do couro cabeludo ou de qualquer outra região do corpo. Em crianças em tratamento oncológico (quimioterapia ou radioterapia) a queda do cabelo pode acontecer. Nestes casos, uma vez terminado o tratamento o cabelo volta a crescer.'
        }
    ]*/
  
    fetch('http://192.168.0.62:8080/glossary')
    .then(res => {
        res.json()
        .then(data => {
            function loadGlossaryWithName(name='') {
                const glossaryContent = document.getElementById("glossary-content");
                glossaryContent.innerHTML = "";
                for (let i in data) {
                    let item = data[i];
  
                    if (item.name.toLowerCase().startsWith(name.toLowerCase())) {
                        glossaryContent.innerHTML += `
                        <div class="item" >
                            <h2 onClick="openDescription(${i})">${item.name}</h2>
                            <div class="item-content">
                                <h3>${item.type}</h3>
                                <p>${item.description}</p>
                                <a href="glossary-desc.html?id=${item.id}">Leia mais</a>
                            </div>
                        </div>
                        `;
                    }
                }
            }
    
            loadGlossaryWithName();
  
            const searchInput = document.getElementById("search").children[0];
            searchInput.addEventListener('keyup', (event) => {
                loadGlossaryWithName(searchInput.value);
            })
        })
    });