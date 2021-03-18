//Come abbiamo fatto questa mattina insieme dovete creare una todo list che permatta di aggiungere(tramite campo input) e rimuovere gli elementi!

//creo un array per la lista

/*var list = ['fare la spesa', 'pulire il garage', 'portare a spasso il cane'];*/


/*for (var i = 0; i < list.length; i++) {

//clono il template
var template = $('.template li').clone();
//inserisco il contenuto dell'array nel template
template.prepend(list[i]);
//inserisco li nella lista
$('.todo-list').append(template);
}*/

// evento che aggiunge un nuovo task inserito nel input di testo

$("#add-item").keydown(function (event) {
  if (event.which == 13) {
    if (text != " ") {
    var text = $(this).val();
    var template = $('.template li').clone();
    template.prepend(text);
    $('.todo-list').append(template);
    //pulisco l'input dopo aver inviato il testo
    $(this).val("");
    }
  }
});
      
//cancella l'elemento della lista selezionando il padre della x
$('.delete-item').click (function(){
  $(this).parent().remove();
});

//Selezioniamo un elemento sempre presente nel DOM rimanendo in ascolto di un evento click che si scatenerà al click della x (che è interno a quell'elemento).

$('.todo-list').on('click', '.delete-item', function(){
  $(this).parent().remove();
});