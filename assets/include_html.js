document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "No se pudo cargar el archivo, verifique que este por http o https y vuelva a cargar🥱";
        el.outerHTML = `<div><p>Huy mi ciela🤭 Te salio un error de tipo: ${xhr.status} porque el archivo no ha sido encontrado, es decir es ${message}</p></div>`;
      }
    });

    xhr.addEventListener("readystatechange", (e) => {});

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html;charset=utf-8");
    xhr.send();
  };
  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});
