let listaDeItens = [];
let itemAEditar;

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItensListados = document.getElementById("lista-de-itens");
const ulItensComprados = document.getElementById("itens-comprados");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  salvarItem();
  mostraritem();
  itensInput.focus();
});

function salvarItem() {
  const comprasItem = itensInput.value;
  const checarDuplicado = listaDeItens.some(
    (element) => element.valor.toUpperCase() === comprasItem.toUpperCase()
  );

  if (checarDuplicado) {
    alert("Item já existe");
  } else {
    listaDeItens.push({
      valor: comprasItem,
      checar: false,
    });
  }

  itensInput.value = "";
}

function mostraritem() {
  ulItensListados.innerHTML = "";
  ulItensComprados.innerHTML = "";
  listaDeItens.forEach((element, index) => {
    if (element.checar) {
      ulItensComprados.innerHTML += `
      <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
      <div>
          <input type="checkbox" checked class="is-clickable" />  
          <span class="itens-comprados is-size-5">${element.valor}</span>
      </div>
      <div>
          <i class="fa-solid fa-trash is-clickable deletar"></i>
      </div>
    </li>`;
    } else {
      ulItensListados.innerHTML += `
      <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
          <input type="checkbox" class="is-clickable" />
          <input type="text" class="is-size-5" value="${element.valor}"></input>
        </div>
        <div>
        <button onclick="editarItem()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button><i class="fa-regular is-clickable fa-pen-to-square editar"></i>
          <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>`;
    }
  });

  const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

  inputsCheck.forEach((element) => {
    element.addEventListener("click", (event) => {
      const valorDoElement =
        event.target.parentElement.parentElement.getAttribute("data-value");

      listaDeItens[valorDoElement].checar = event.target.checked;
      mostraritem();
    });
  });

  deletarItem();
  editarItem();
}

function deletarItem() {
  const deletarObjetos = document.querySelectorAll(".deletar");

  deletarObjetos.forEach((element) => {
    element.addEventListener("click", (event) => {
      const valorDoElement =
        event.target.parentElement.parentElement.getAttribute("data-value");
      listaDeItens.splice(valorDoElement, 1);
      mostraritem();
    });
  });
}

function editarItem() {
  const editarItens = document.querySelectorAll(".editar");

  editarItens.forEach((element) => {
    element.addEventListener("click", (event) => {
      itemAEditar =
        event.target.parentElement.parentElement.getAttribute("data-value");

      mostraritem();
    });
  });
}
