// selector persegi
const sisipersegi = document.querySelector('.sisipersegi');
const buttonKelilingPersegi = document.querySelector('.buttonKelilingPersegi');
let jawaban = document.querySelector('.jawaban');
// selector luas persegi
const buttonLuasPersegi = document.querySelector('.buttonLuasPersegi')
const sisipersegiLuas = document.querySelector('.sisipersegiLuas');


//selector keliling segitiga
const sisiSegitigaA = document.querySelector('.sisisegitiga-a');
const sisiSegitigaB = document.querySelector('.sisisegitiga-b');
const sisiSegitigaC = document.querySelector('.sisisegitiga-c');

//selector luas segitiga
const tinggiSegitiga = document.querySelector('.tinggisegitiga');
const alasSegitiga = document.querySelector('.alassegitiga');


//selector keliling layang layang
const sisiAtasLayang = document.querySelector('.sisiAtasLayang');
const sisiBawahLayang = document.querySelector('.sisiBawahLayang');

//selector luas layang layang
const diagonal1 = document.querySelector('.diagonal1');
const diagonal2 = document.querySelector('.diagonal2');

//selector keliling trapezium
const sisiATrapezium = document.querySelector('.sisiATrapezium');
const sisiBTrapezium = document.querySelector('.sisiBTrapezium');
const sisiCTrapezium = document.querySelector('.sisiCTrapezium');
const sisiDTrapezium = document.querySelector('.sisiDTrapezium');


//selector luas trapezium
const sisiSejajarA = document.querySelector('.sisiSejajarA');
const sisiSejajarB = document.querySelector('.sisiSejajarB');
const tinggiTrapezium = document.querySelector('.tinggiTrapezium');

//selector luas permukaan kubus
const sisiKubus = document.querySelector('.sisiKubus');

//selector balok
const panjangBalok = document.querySelector('.panjangBalok');
const lebarBalok = document.querySelector('.lebarBalok');
const tinggiBalok = document.querySelector('.tinggiBalok');

// event listerner
// buttonKelilingPersegi.addEventListener("click", jumlah);


//keliling persegi
function hitungKP(){
    return sisipersegi.value * 4;
}

function jumlah(e){
    // e.preventDefault();
    const pembahasan = document.createElement("p");
    pembahasan.classList.add("pembahasan");
    jawaban.appendChild(pembahasan);
    pembahasan.innerHTML = `Keliling Persegi = S x 4
    <br> Keliling Persegi = ${sisipersegi.value} x 4
    <br> Keliling Persegi = ${hitungKP()}
    <br><br> Jumlah = ${hitungKP()}`
}




// event listener luas persegi
// buttonLuasPersegi.addEventListener("click", jumlahLuasPersegi);


//luas persegi
function hitungLuasPersegi(){
    return sisipersegiLuas.value * sisipersegiLuas.value;
}

function jumlahLuasPersegi(e){
    // e.preventDefault();
    const pembahasan = document.createElement("p");
    pembahasan.classList.add("pembahasan");
    jawaban.appendChild(pembahasan);
    pembahasan.innerHTML = `Luas Persegi = S x S
    <br> Luas Persegi = ${sisipersegiLuas.value} x ${sisipersegiLuas.value}
    <br> Luas Persegi = ${hitungLuasPersegi()}
    <br><br> Jumlah = ${hitungLuasPersegi()}`
}


//keliling segitiga
function hitungKelilingSegitiga(){
    return parseInt(sisiSegitigaA.value) + parseInt(sisiSegitigaB.value) + parseInt(sisiSegitigaC.value);
}

function jumlahKelilingSegitga(e){
    // e.preventDefault();
    const pembahasan = document.createElement("p");
    pembahasan.classList.add("pembahasan");
    jawaban.appendChild(pembahasan);
    pembahasan.innerHTML = `Keliling Segitiga = sisi a + sisi b + sisi c
    <br> Keliling Segitiga = ${sisiSegitigaA.value} + ${sisiSegitigaB.value} + ${sisiSegitigaC.value}
    <br> Keliling Segitiga = ${hitungKelilingSegitiga()}
    <br><br> Jumlah = ${hitungKelilingSegitiga()}`
}


//luas segitiga
function hitungLuasSegitiga(){
    return parseInt(tinggiSegitiga.value) * parseInt(alasSegitiga.value) / 2 
}

function hasilLuasSegitiga(e){
        // e.preventDefault();
        const pembahasan = document.createElement("p");
        pembahasan.classList.add("pembahasan");
        jawaban.appendChild(pembahasan);
        pembahasan.innerHTML = `Luas Segitiga = ½ x tinggi x alas
        <br> Luas Segitiga = ½ x ${tinggiSegitiga.value} x ${alasSegitiga.value}
        <br> Luas Segitiga = ${hitungLuasSegitiga()}
        <br><br> Jumlah = ${hitungLuasSegitiga()}`
}

//keliling layang layang
hitungKelilingLayang = () => {return 2 * parseInt(sisiAtasLayang.value) + 2 * parseInt(sisiBawahLayang.value)};

hasilKelilingLayang = (e) => {
        // e.preventDefault();
        const pembahasan = document.createElement("p");
        pembahasan.classList.add("pembahasan");
        jawaban.appendChild(pembahasan);
        pembahasan.innerHTML = `Keliling Layang-Layang = 2 x Sisi AD/DC + 2 x Sisi AB/BC
        <br> Keliling Layang-Layang = 2 x ${sisiAtasLayang.value} + 2 x ${sisiBawahLayang.value}
        <br> Keliling Layang-Layang = ${hitungKelilingLayang()}
        <br><br> Jumlah = ${hitungKelilingLayang()}` 
};

// luas layang layang
hitungLuasLayang  = () => {return parseInt(diagonal1.value) * parseInt(diagonal2.value) / 2};

hasilLuasLayang = (e) => {
            // e.preventDefault();
            const pembahasan = document.createElement("p");
            pembahasan.classList.add("pembahasan");
            jawaban.appendChild(pembahasan);
            pembahasan.innerHTML = `Luas Layang-Layang = 2 x Sisi AD/DC + 2 x Sisi AB/BC
            <br> Luas Layang-Layang = ½ x ${diagonal1.value} x ${diagonal2.value}
            <br> Luas Layang-Layang = ${hitungLuasLayang()}
            <br><br> Jumlah = ${hitungLuasLayang()}` 
}

//keliling trapezium
hitungKelilingTrapezium = () => {return parseInt(sisiATrapezium.value) + parseInt(sisiBTrapezium.value) + parseInt(sisiCTrapezium.value) + parseInt(sisiDTrapezium.value)};

hasilKelilingTrapezium = (e) => {
                // e.preventDefault();
                const pembahasan = document.createElement("p");
                pembahasan.classList.add("pembahasan");
                jawaban.appendChild(pembahasan);
                pembahasan.innerHTML = `Keliling Trapezium = Sisi a + Sisi b + Sisi c + sisi d
                <br> Keliling Trapezium = ${sisiATrapezium.value} + ${sisiBTrapezium.value} + ${sisiCTrapezium.value} + ${sisiDTrapezium.value}
                <br> Keliling Trapezium = ${hitungKelilingTrapezium()}
                <br><br> Jumlah = ${hitungKelilingTrapezium()}` 
}


//luas trapezium
hitungLuasTrapezium = () => {return parseInt(tinggiTrapezium.value) / 2  * (parseInt(sisiSejajarA.value) + parseInt(sisiSejajarB.value)) };

hasilLuasTrapezium = (e) => {
                // e.preventDefault();
                const pembahasan = document.createElement("p");
                pembahasan.classList.add("pembahasan");
                jawaban.appendChild(pembahasan);
                pembahasan.innerHTML = `Luas Trapezium = ½ x t b(Sisi Sejajar a + Sisi Sejajar b)
                <br> Luas Trapezium = ½ x ${tinggiTrapezium.value} x(${sisiSejajarA.value} + ${sisiSejajarB.value})
                <br> Luas Trapezium = ${hitungLuasTrapezium()}
                <br><br> Jumlah = ${hitungLuasTrapezium()}`
}

//luas permukaan kubus
hitungLuasPermukaanKubus = () => {return 6 * parseInt(sisiKubus.value) * parseInt(sisiKubus.value)};

hasilLuasPermukaanKubus = (e) => {
                // e.preventDefault();
                const pembahasan = document.createElement("p");
                pembahasan.classList.add("pembahasan");
                jawaban.appendChild(pembahasan);
                pembahasan.innerHTML = `Luas Permukaan Kubus = 6 x S x S
                <br> Luas Permukaan Kubus = 6 x ${sisiKubus.value} x ${sisiKubus.value}
                <br> Luas Permukaan Kubus = ${hitungLuasPermukaanKubus()}
                <br><br> Jumlah = ${hitungLuasPermukaanKubus()}`
}

//Volume Kubus
hitungVolumeKubus = () => {return parseInt(sisiKubus.value) * parseInt(sisiKubus.value) * parseInt(sisiKubus.value)}

hasilVolumeKubus = (e) => {
                // e.preventDefault();
                const pembahasan = document.createElement("p");
                pembahasan.classList.add("pembahasan");
                jawaban.appendChild(pembahasan);
                pembahasan.innerHTML = `Volume Kubus = S x S x S
                <br> Volume Kubus = ${sisiKubus.value} x ${sisiKubus.value} x ${sisiKubus.value}
                <br> Volume Kubus = ${hitungVolumeKubus()}
                <br><br> Jumlah = ${hitungVolumeKubus()}`    
}

//Luas Permukaan Balok
hitungLuasPermukaanBalok = () => {return 2 * ( ( parseInt(panjangBalok.value) * parseInt(lebarBalok.value) ) + ( parseInt(panjangBalok.value) * parseInt(tinggiBalok.value) ) + ( parseInt(lebarBalok.value) * parseInt(tinggiBalok.value) ) )};

hasilLuasPermukaanBalok = () => {
                // e.preventDefault();
                const pembahasan = document.createElement("p");
                pembahasan.classList.add("pembahasan");
                jawaban.appendChild(pembahasan);
                pembahasan.innerHTML = `Luas Permukaan Balok = 2 x (pl + pt x lt)
                <br> Luas Permukaan Balok = 2 x (${panjangBalok.value}.${lebarBalok.value} + ${panjangBalok.value}.${tinggiBalok.value} + ${lebarBalok.value}.${tinggiBalok.value}) 
                <br> Luas Permukaan Balok = ${hitungLuasPermukaanBalok()}
                <br><br> Jumlah = ${hitungLuasPermukaanBalok()}`     
}

hitungVolumeBalok = () => {return parseInt(panjangBalok.value) * parseInt(lebarBalok.value) * parseInt(tinggiBalok.value)}

hasilVolumeBalok = () => {
                // e.preventDefault();
                const pembahasan = document.createElement("p");
                pembahasan.classList.add("pembahasan");
                jawaban.appendChild(pembahasan);
                pembahasan.innerHTML = `Volume Balok = p x l x t
                <br> Volume Balok = ${panjangBalok.value} x ${lebarBalok.value} x ${tinggiBalok.value}
                <br> Volume Balok = ${hitungVolumeBalok()}
                <br><br> Jumlah = ${hitungVolumeBalok()}` 
}

