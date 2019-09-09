module.exports= function (io){//esto actua como servidor

    let users = ['sebas','justina','juan'];
    io.on('connection',socket =>{
        console.log('nuevo usuario conectado.');


        socket.on('send message',function(data){
            io.sockets.emit('new message',data);//cuando un cliente me envia un dato a traves de new message,
            //el servidor envia estos datos a traves de io.socket.emit este dato.
        });

        socket.on('new user',(data,cb)=>{
          
            if(users.indexOf(data) != -1){
                cb(false);
            }else{
                cb(true);
                socket.nickName= data;
                users.push(socket.nickName);
            }
        });

    });// se queda escuchando cada vez que hay un nuevo mensaje.


}