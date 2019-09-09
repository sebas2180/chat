

$(function(){

    console.log('alert 0: funcionamiento ok.');
    const socket = io();

    
    //Obtengo datos del logeo.
    const $nickForm= $('#nickForm');
    const $nickName = $('#nickName');
    const $nickError = $('#nickError');
    //const $usuarios = $(usersNames);
//Obtengo datos del chat.
    const $messageForm = $('#messageForm');
    const $messajeBox = $('#message');
    const $chat = $('#chat');


    $nickForm.submit(e =>{
        console.log('alert 2: funcionamiento ok.');
        e.preventDefault();
        socket.emit('new user',$nickName.val(),data=>{
            if(data){
                console.log('trueeee');
               $('#nickWrap').hide();
                $('#contentWrap').show();
            }else{
                console.log('falseeee');
                $nickError.html(`
                <div class='alert alert-danger'>
            Este usuario ya existe!!
            </div>
            `);
           // $nickName.val('');
            }
        });
    });

    $messageForm.submit( e=>{
        e.preventDefault();
        console.log('enviandoDatos');
       socket.emit('send message',$messajeBox.val());
       $messajeBox.val('');
    });
    //obteniendo los elementos del dom desde la interface.
   socket.on('new message',function(data){
    $chat.append(data+'</br>');
   });
})