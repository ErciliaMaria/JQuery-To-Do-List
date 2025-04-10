$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeNovaTask = $('#name-task').val();
        console.log(nomeNovaTask);

        $(`<li>${nomeNovaTask}</li>`).appendTo('.task-list');

        $('#name-task').val("");
     })
    $(document).on('click','li', function(){
       $(this).toggleClass('done')
    });
});