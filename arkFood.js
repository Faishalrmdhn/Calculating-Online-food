function arkFood(harga, voucher, jarak, pajak){
    
    voucher = voucher.toUpperCase();
    let hargaDiskon = 0;
    console.log(`Harga      : ${harga}`);
    if (voucher== "ARKAFOOD5" && harga>=50000){
        hargaDiskon= harga*0.5;
        if(hargaDiskon<=50000){
        console.log(`Potongan   : ${hargaDiskon}`);
            } else {
        hargaDiskon = 50000;
        console.log(`Potongan   : ${hargaDiskon}`);
            }
    } else if(voucher == "DITRAKTIRDEMY" && harga >=25000){
        hargaDiskon = harga * 0.6;
        if(hargaDiskon<=30000){
            console.log(`Potongan   : ${hargaDiskon}`);
                } else {
            hargaDiskon = 30000;
            console.log(`Potongan   : ${hargaDiskon}`);
                }
    } else {
        console.log(`Potongan   : ${hargaDiskon}`);
    }

// logic pengiriman 
    let biayaAntar = 5000;
    let jarakMax = 2;
    let jarakSisa = jarak - jarakMax;
if(jarak <= 2){
        console.log(`Biaya Antar: ${biayaAntar}`);
    } else {
        biayaAntar += jarakSisa*3000;
        console.log(`Biaya Antar: ${biayaAntar}`);
    }

// logic pajak
    let hargaPajak = harga * 0.05;
     switch(pajak){
        case true:
        console.log(`Pajak      : ${hargaPajak}`);
        break;
      case false:
        hargaPajak = 0;
        console.log(`Pajak      : ${hargaPajak}`);
        break;
        }
        console.log(`Subtotal   : ${harga-hargaDiskon+biayaAntar+hargaPajak}`)
    }

arkFood(30000,"DITRAKTIRDEMY", 5, true)

