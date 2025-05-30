const titulo = document.getElementById("titulo-isbn")
const autor = document.getElementById("autor")
const paginas = document.getElementById("pag")
const publicacao = document.getElementById("public")
const sinopse = document.getElementById("sinopse")


function buscarLivro(){
    const isbn = document.getElementById("isbn").value;
    let isbnSize = isbn.toString()
    
    if(isbnSize.length === 13){
        const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`

        fetch(url)
            .then((Response) => {
                return Response.json();
            })
            .then((data) => {
                if (data.erro) {
                    alert("Livro não encontrado...");
                    return
                }
                titulo.textContent = data.title
                autor.textContent = data.authors.join(", ")
                paginas.textContent = data.page_count
                publicacao.textContent = data.year
                sinopse.textContent = data.synopsis
            })
            .catch((error) => {
                console.error(error);
                alert("Erro ao buscar o livro. Tente novamente.")
            })

    } else{
        alert("O código que você inseriu está incompleto, tente novamente...")
        console.log(livroSize)
    }
}