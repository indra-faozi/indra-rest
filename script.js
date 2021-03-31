function getAllmenu()
{
    $.getJSON('pizza.json', function(data){
        let menu = data.menu
        $.each(menu, function(i, data){
            $('#daftar-menu').append('<div class="col-md-4 mb-4"><div class="card" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>')
        })
    });
}

getAllmenu()

$('.nav-link').click(function(){
    $('.nav-link').removeClass('active')
    $(this).addClass('active')

    let kategori = $(this).html();
    $('#kategori').html(kategori)


    if(kategori == 'All Menu')
    {
        $('#daftar-menu').empty()
        getAllmenu();
        return;
    }

    $.getJSON('pizza.json', function(data)
    {
        let menu = data.menu; 
        let content = '';

        $.each(menu, function(i, data)
        {
            if (data.kategori == kategori.toLowerCase()) {
                console.log(kategori)
                content += '<div class="col-md-4 mb-4"><div class="card" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>';
            }
        })
        $('#daftar-menu').html(content)
    })
})