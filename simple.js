// for(i=1;i<=5;i++){
//     console.log(i)
// }

//recartion:kuno ekta function er vitor theke call korake bola hoi recartion
function consolenumber(i){
    if(i>5){
        return;
    }
    console.log(i);
    consolenumber(i+1);
}
consolenumber