// crud básico java script 

const minitwiter = { 
    usuario: [
        {
            username: 'marlonsilva',
        }


    ],
     posts:[
           {   
               id: 1,
               owner:'marlonsilva',
               content: 'meu twiter'
           }


     ],
}
// creat 
function criaPost(dados) {
    minitwiter.posts.push({
        id: minitwiter.posts.length + 1,
        owner:dados.owner,
        content: dados.content
    })
}
criaPost({woner:'marlonsilva',content:'segundo tweet'})
criaPost({woner:'marlonsilva',content:'terceiro tweet'})
//console.log(minitwiter.posts) 

// READ
function pegaPost(){
    return minitwiter.posts
} 
//console.log(pegaPost())

//UPDATE
function atualizapost(id,novoConteudo){
    const postAtualizado = pegaPost().find((post) =>{
        return post.id=== id

    })
    console.log(postAtualizado)
    postAtualizado.content = novoConteudo
}
//atualizapost(1,'novo conteúdo do post')
//console.log(pegaPost())

//DELETE 

function deletaPost(id){
    const listadepostatual = pegaPost().filter ((postatual)=> {
        return postatual.id !== id
    })
    minitwiter.posts = listadepostatual
}
deletaPost(1)
deletaPost(2)
deletaPost(3)
console.log(pegaPost())