for(let i = 1; i <= 100; i++){
    document.write("<p>Perulangan ke-" + i + "</p>")
}
let ulangi = confirm("apakah ingin lanjut")
let count = 0;
while(ulangi){
    count++;
    ulangi = confirm("apakah ingin lanjut?");
}

documen.write("perulangan sudah dilakukan sebanyak "+ counter +"kali");