
export function a(io){
    console.log(io,'yoo anchal')
    io.on('connect', () => {
        console.log('connection establish');
    });
    io.on('msg',()=>{
        console.log('yes msg comes')
    })
    io.on('listen-msg',(data)=>{
       console.log('msg-recevive')
    })
    io.on('after-some-time',(data)=>{
        console.log(data)
     })
}