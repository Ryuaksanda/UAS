var np=document.querySelector("h2").innerHTML;
function trx(){
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