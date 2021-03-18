//Come abbiamo fatto questa mattina insieme dovete creare una todo list che permatta di aggiungere(tramite campo input) e rimuovere gli elementi!

//creo un array per la lista

var list = ['fare la spesa', 'pulire il garage', 'portare a spasso il cane'];


for (var i = 0; i < list.length; i++) {

//clono il template
var template = $('.template li').clone();
//inserisco il contenuto dell'array nel template
template.prepend(list[i]);
//inserisco li nella lista
$('.todo-list').append(template);
}



