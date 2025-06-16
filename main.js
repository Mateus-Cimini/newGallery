$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const urlNewImage = $('#new-url').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${urlNewImage}" />`).appendTo(newItem);
        $(`
            <div class="overlay-images-link">
                <a href="${urlNewImage}" title="Ver imagem tamanho real" target="_blank">
                    Ver imagem tamanho real
                </a>
            </div>`).appendTo(newItem);
            $(newItem).appendTo('ul')
            $(newItem).fadeIn(1000)
            $('#new-url').val('')
    })


});