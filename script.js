function pay () {
    p = parseFloat(document.getElementById("price").value);
    t = parseFloat(document.getElementById("total").value);
    sub = p * t

    if (subT >= 2500000) {
        discount = 25
        tDiscount = (subT * 0.25)
    }else if(subT >= 200000){
        discount = 20
        tDiscount = (subT * 0.20)
    }else if(subT >= 150000){
        discount = 15
        tDiscount = (subT * 0.15)
    }else if(subT >= 100000){
        discount = 10
        tDiscount = (subT * 0.10)
    }

    tPay = subT - tDiscount
    document.getElementById("sub").value = `Rp ${subT},-`
    document.getElementById("ndiscount").value = `Rp ${tDiscount},-`
    document.getElementById("discount").value = `${discount}%`
    document.getElementById("pay").value = `Rp ${tPay},-`


function payment(){
    c = document.getElementById("code").value;
    n = document.getElementById("name").value;
    p = document.getElementById("price").value;
    t = document.getElementById("total").value;

    let validation = []

    if (c == "") {
        text = doocument.getElementByClassName("kode")
        text[0].style.color = "red"
        text = document.getElementByClassName("textboxc")
        text[0].style.boxShadow = "insert 2px 2px 2px red, 1px 1px 1px red"
        validation.push(`Kode Barang Harus Diisi!\n`)
    } else {
        text = document.getElementByClassName("textboxc")
        text[0].style.boxShadow = "insert 2px 2px 2px brokenwhitw, 1px 1px 1px brokenwhite"
        text = doocument.getElementByClassName("kode")
        text[0].style.color = "black"
    }

    if(n == "") {
        text = doocument.getElementByClassName("nama")
        text[0].style.color = "red"
        text = document.getElementByClassName("textboxn")
        text[0].style.boxShadow = "insert 2px 2px 2px red, 1px 1px 1px red"
        validation.push(`Nama Barang Harus Diisi!\n`)
    } else {
        text = document.getElementByClassName("textboxn")
        text[0].style.boxShadow = "insert 2px 2px 2px brokenwhitw, 1px 1px 1px brokenwhite"
        text = doocument.getElementByClassName("nama")
        text[0].style.color = "black"
    }

    if(p == 0 | p == "") {
        text = doocument.getElementByClassName("harga")
        text[0].style.color = "red"
        text = document.getElementByClassName("textboxp")
        text[0].style.boxShadow = "insert 2px 2px 2px red, 1px 1px 1px red"
        validation.push(`Harga Tidak Boleh Nol!\n`)
    } else {
        text = document.getElementByClassName("textboxp")
        text[0].style.boxShadow = "insert 2px 2px 2px brokenwhitw, 1px 1px 1px brokenwhite"
        text = doocument.getElementByClassName("harga")
        text[0].style.color = "black"
    }

    if(t == 0 | t == "") {
        text = doocument.getElementByClassName("jumlah")
        text[0].style.color = "red"
        text = document.getElementByClassName("textboxp")
        text[0].style.boxShadow = "insert 2px 2px 2px red, 1px 1px 1px red"
        validation.push(`Jumlah Tidak Boleh Nol!\n`)
    } else {
        text = document.getElementByClassName("textboxp")
        text[0].style.boxShadow = "insert 2px 2px 2px brokenwhitw, 1px 1px 1px brokenwhite"
        text = doocument.getElementByClassName("jumlah")
        text[0].style.color = "black"
    }
    
    if (validation.length == 0) {
        pay()
    } else {
        alert(validation.join(""))
    }
    }
}
