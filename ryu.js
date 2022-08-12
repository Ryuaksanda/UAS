var np="";
function trx(){
    np=document.querySelector("h2").innerHTML;
    localStorage.setItem("np",np);
}
function proses(){
    if(localStorage.getItem("np")=='Star Guardian Zoe 1/7 Scale Figure'){
        localStorage.setItem("hp",'Rp 5.200.000');
        localStorage.setItem("icon",'<img class="barang" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt2c324d26163e9e64/62d99c67df0a3871e08a2196/2022_Promo_StarGuardian_Zoe_Ecomm_image01.png?auto=webp&width=96&quality=85">');
    }
    else if(localStorage.getItem("np")=='Spirit Blossom Ahri Tee (Unisex)'){
        localStorage.setItem("hp",'Rp 450.000');
        localStorage.setItem("icon",'<img class="barang" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blta244967b86e013f1/61d8c7e27a4c822370d49659/2021_SB_Promos_ecomm_thumb_AhriTee_2560x3200_01.png?auto=webp&width=96&quality=85">');
    }
    else if(localStorage.getItem("np")=='Star Nemesis Reverse Thread Fiddlesticks Hoodie'){
        localStorage.setItem("hp",'Rp 1.265.000');
        localStorage.setItem("icon",'<img class="barang" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltca867f0a7ba22a29/62d99dcab08306768355bba1/2022_Promo_StarGuardian_Apparel_FiddlesticksHoodie_Ecomm_image01.png?auto=webp&width=96&quality=85">');
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT XL Mousepad'){
        localStorage.setItem("hp",'Rp 375.000');
        localStorage.setItem("icon",'<img class="barang" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltfd9968f99831a0b9/5f90a7462f59ae27f3d631a4/XL_mousepad_00.png?auto=webp&width=96&quality=85">');
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT Tas Sabuk'){
        localStorage.setItem("hp",'Rp 670.000');
        localStorage.setItem("icon",'<img class="barang" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt2049d09b1c09c06c/5f90add04671ee30c68a0b15/Belt_Bag_01.png?auto=webp&width=96&quality=85">');
    }
    document.getElementById("barang").innerHTML=localStorage.getItem("icon");
    document.getElementById("produk").innerHTML=localStorage.getItem("np");
    document.getElementById("harga").innerHTML=localStorage.getItem("hp");
}
function oper(){
    var alamat=document.data.alamat.value+", "+document.data.kec.value+", "+document.data.kota.value+", "+document.data.pos.value;
    localStorage.setItem("nama",document.data.nama.value);
    localStorage.setItem("alamat",alamat);
    localStorage.setItem("nomor",Math.floor(Math.random()*100000));
    if(document.data.alamat.value==""||document.data.kec.value==""||document.data.kota.value==""||document.data.pos.value==""||document.data.email.value==""||document.data.telp.value==""){
        alert("Isi data dengan lengkap!");
    }
    else window.open("invoice.html","_parent");
}
function hasil(){
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    document.getElementById("nomor").innerHTML="INV/"+year+month+day+"/RGS/"+localStorage.getItem("nomor");
    switch(month){
        case 0 : month="Januari"; break;
        case 1 : month="Februari"; break;
        case 2 : month="Maret"; break;
        case 3 : month="April"; break;
        case 4 : month="Mei"; break;
        case 5 : month="Juni"; break;
        case 6 : month="Juli"; break;
        case 7 : month="Agustus"; break;
        case 8 : month="September"; break;
        case 9 : month="Oktober"; break;
        case 10 : month="November"; break;
        default : month="Desember";
        
    }
    document.getElementById("nama").innerHTML=": "+localStorage.getItem("nama");
    document.getElementById("tgl").innerHTML=": "+day+" "+month+" "+year;
    document.getElementById("alamat").innerHTML=": "+localStorage.getItem("alamat");
    document.getElementById("np").innerHTML=": "+localStorage.getItem("np");
    document.getElementById("hp").innerHTML=": "+localStorage.getItem("hp");
    document.getElementById("tt").innerHTML=": "+localStorage.getItem("hp");
}
function gambar1(){
    if(localStorage.getItem("np")=='Star Guardian Zoe 1/7 Scale Figure'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt2c324d26163e9e64/62d99c67df0a3871e08a2196/2022_Promo_StarGuardian_Zoe_Ecomm_image01.png">';
    }
    else if(localStorage.getItem("np")=='Spirit Blossom Ahri Tee (Unisex)'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blta244967b86e013f1/61d8c7e27a4c822370d49659/2021_SB_Promos_ecomm_thumb_AhriTee_2560x3200_01.png">';
    }
    else if(localStorage.getItem("np")=='Star Nemesis Reverse Thread Fiddlesticks Hoodie'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltca867f0a7ba22a29/62d99dcab08306768355bba1/2022_Promo_StarGuardian_Apparel_FiddlesticksHoodie_Ecomm_image01.png">';
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT XL Mousepad'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltfd9968f99831a0b9/5f90a7462f59ae27f3d631a4/XL_mousepad_00.png">';
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT Tas Sabuk'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt2049d09b1c09c06c/5f90add04671ee30c68a0b15/Belt_Bag_01.png">';
    }
}
function gambar2(){
    if(localStorage.getItem("np")=='Star Guardian Zoe 1/7 Scale Figure'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltf5b0476532381493/62d99c845c954177895a94b1/2022_Promo_StarGuardian_Zoe_Ecomm_image04.png">';
    }
    else if(localStorage.getItem("np")=='Spirit Blossom Ahri Tee (Unisex)'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt2cbacf5ee23b9ef4/61a55d072dc01977975bc997/2021_SB_Promors_ecomm_AhriTee_02.png">';
    }
    else if(localStorage.getItem("np")=='Star Nemesis Reverse Thread Fiddlesticks Hoodie'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltc0eed9a5e996b8d3/62d99dda5ab928718a85dc2f/2022_Promo_StarGuardian_Apparel_FiddlesticksHoodie_Ecomm_image03.png">';
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT XL Mousepad'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltaba2b75a6d77920c/5f90a75a3bf9954172cf9fa7/XL_mousepad_02.png">';
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT Tas Sabuk'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltdc0416e44368178e/5f90addc3db5122648cbef66/Belt_Bag_04.png">';
    }
}
function gambar3(){
    if(localStorage.getItem("np")=='Star Guardian Zoe 1/7 Scale Figure'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt3ec3848210e933b4/62d99c8419ee366ebba5332e/2022_Promo_StarGuardian_Zoe_Ecomm_image05.png">';
    }
    else if(localStorage.getItem("np")=='Spirit Blossom Ahri Tee (Unisex)'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltf08161b557b9489d/61a55d0bdd6fcd0cf2950fb2/2021_SB_Promors_ecomm_AhriTee_03.png">';
    }
    else if(localStorage.getItem("np")=='Star Nemesis Reverse Thread Fiddlesticks Hoodie'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt41d1019ddbbe6528/62d99ddaaf7b037b67accac9/2022_Promo_StarGuardian_Apparel_FiddlesticksHoodie_Ecomm_image04.png">';
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT XL Mousepad'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt3a83340f4f4e491c/5f99b70483a0a3620dd3ab30/KDA_ALL_OUT_XL_MOUSEPAD_07.png">';
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT Tas Sabuk'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt698b7d5335e25ef2/5f90ade51252ff30caf64123/Belt_Bag_06.png">';
        
    }
}
function gambar4(){
    if(localStorage.getItem("np")=='Star Guardian Zoe 1/7 Scale Figure'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltb5c3a7d317edfaf0/62d99c87a30ae37191c5faed/Copy_of_2022_Promo_StarGuardian_Zoe_Ecomm_image06.png">';
    }
    else if(localStorage.getItem("np")=='Spirit Blossom Ahri Tee (Unisex)'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt42fa1f190442a4f4/61a55d103865bf22bd95fce6/2021_SB_Promors_ecomm_AhriTee_04.png">';
    }
    else if(localStorage.getItem("np")=='Star Nemesis Reverse Thread Fiddlesticks Hoodie'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt0fe003978932c5f9/62d99dd92455a47a1915169d/2022_Promo_StarGuardian_Apparel_FiddlesticksHoodie_Ecomm_image05.png">';
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT XL Mousepad'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt04e8dab0502365f7/5f99b7091a81c1644e996827/KDA_ALL_OUT_XL_MOUSEPAD_08.png">';
    }
    else if(localStorage.getItem("np")=='K/DA ALL OUT Tas Sabuk'){
        document.getElementById("preview").innerHTML='<img class="gambar" id="preview" src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt42dc61321eae9ab8/5f90adea3f5233264207a03d/Belt_Bag_07.png">';
    }
}