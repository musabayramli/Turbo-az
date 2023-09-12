const sec1 = document.querySelector('#sec1');
const carts = document.querySelector('.carts');
const inps = document.querySelectorAll('#sec1 .inps input');
const inp = document.querySelector('.inp');
const buy = document.querySelector('.al');
const del = document.querySelector('.sil');


let arr = [
    { name: 'Chery', model: 'Tiggo 7 Pro', engine: 1.5, year: 2023, price: 45900, img: 'https://turbo.azstatic.com/uploads/full/2023%2F08%2F05%2F14%2F42%2F11%2F0b274298-6148-4400-be87-99b12eb7ba08%2F35454_cbToph90zAGTM0mHS0THNA.jpg' },
    { name: 'Mercedes', model: 'C 200', engine: 1.5, year: 2022, price: 71500, img: 'https://turbo.azstatic.com/uploads/full/2023%2F07%2F06%2F11%2F21%2F29%2Fd4f23b77-a492-459e-954d-3a42e11125f5%2F87759_ZvA3oLmhTwbkpe8cGLrq-A.jpg' },
    { name: 'Land Rover', model: 'Defender', engine: 2, year: 2021, price: 92500, img: 'https://turbo.azstatic.com/uploads/full/2023%2F01%2F21%2F17%2F40%2F43%2F300578a8-cd7a-48b4-b0eb-b864bd87a433%2F15120_wW3HlLX5e2dMKwmmlMCXQA.jpg' },
    { name: 'Chervolet', model: 'Camoro', engine: 2.0, year: 2017, price: 26900, img: 'https://turbo.azstatic.com/uploads/full/2023%2F08%2F11%2F16%2F48%2F43%2F98ccc7af-c907-4c54-a2eb-0f68972fb9b6%2F82062_hTXgCNYdnHfGUcIN0my1zw.jpg' },
    { name: 'Kia', model: 'optima', engine: 2.0, year: 2013, price: 23300, img: 'https://turbo.azstatic.com/uploads/full/2023%2F08%2F30%2F09%2F14%2F44%2F7cc2d7dc-60f5-42f2-9c64-3f36607fa50c%2F3655_8J3dMTEkZgNA1ZlKd5gfEw.jpg' },
    { name: 'Changan', model: 'Cs 15', engine: 1.5, year: 2021, price: 26000, img: 'https://turbo.azstatic.com/uploads/full/2023%2F09%2F01%2F13%2F28%2F12%2F431c8772-7c39-4c7e-9956-fe04175e7d7f%2F88104_yE0xFj6nEH4QASw5uQ6dng.jpg' },
    { name: 'BMW', model: 'X5 M', engine: 4.4, year: 2020, price: 139500, img: 'https://turbo.azstatic.com/uploads/full/2023%2F04%2F07%2F15%2F12%2F05%2F5ca049c6-5b7c-446e-9e6b-82d694adee81%2F31262_YW-STzKwedcucu7nS1bNtQ.jpg' },
    { name: 'Dodge', model: 'Charger', engine: 3.6, year: 2023, price: 63600, img: 'https://turbo.azstatic.com/uploads/full/2023%2F08%2F12%2F10%2F16%2F45%2F3d75f97c-29e1-478a-a466-34a114f7d5dd%2F40019_SCytRcxX41AuDgWQFCK71g.jpg' },
    { name: 'Toyota', model: 'Camry', engine: 2.5, year: 2018, price: 32500, img: 'https://turbo.azstatic.com/uploads/full/2023%2F08%2F11%2F20%2F27%2F20%2Fbc2fcafc-992f-47b7-841c-b49618967eb9%2F82124__agk8rcZgwk9Q3GeOuiS6Q.jpg' }
];


function yarat() {
    const newArr = {
        name: inps[0].value,
        model: inps[1].value,
        year: inps[2].value,
        engine: inps[3].value,
        img: inps[4].value,
        price: 'Razilasma',
    };
    for (let i = 0; i < inps.length; i++) {
       inps[i].value = ''
    }

    if (!arr.some(item => item.name === newArr.name)) {
        arr.push(newArr);
        console.log(arr);
    }
    ok(arr)
}


function ok(array) {
    let kod = '';
    for (let i = 0; i < array.length; i++) {
        kod += `
            <div class="card" style="width: 16rem; height: 200px">
                <img src="${array[i].img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-text">${array[i].price} $</h6>
                    <div class='d-flex align-items-center gap-3'>
                        <h5 class="card-title">${array[i].name}</h5>
                        <h6 class="card-text">${array[i].model}</h6>
                    </div>
                    <div class='d-flex gap-3'>
                        <h6 class="card-text">${array[i].year} il</h6>
                        <h6 class="card-text">${array[i].engine} L</h6>
                    </div>
                    <div class="d-flex align-items-center justify-content-around">
                        <a href="#" class="btn btn-primary" onclick="al(this)">Al</a>
                        <a href="#" class="btn btn-primary" onclick="sil(this)">Sil</a>
                        <a href="#" class="btn btn-primary" onclick="delet(this)">Delet</a>
                    </div>
                </div>
            </div>`;

    }

    carts.innerHTML = kod;
}

ok(arr);

let toplam = 0;
let silDeyer = 0
function al(x) {
    x.parentElement.parentElement.parentElement.style.background = 'green';
    x.parentElement.parentElement.parentElement.style.boxShadow = '4px 4px 10px grey';



    if (x) {
        const cardElement = x.closest('.card');
        const cardTitle = cardElement.querySelector('.card-title');
        toplam++
        buy.innerHTML = `${toplam} ${cardTitle.textContent}`;
    }




}

function axtar() {
    let inpVal = inp.value.trim().toLowerCase();
    let arrFiltr = arr.filter(item => item.name.toLowerCase().includes(inpVal))
    console.log(arrFiltr);
    ok(arrFiltr)
    

}

function sil(x) {
    x.parentElement.parentElement.parentElement.style.background = 'red';
    x.parentElement.parentElement.parentElement.style.boxShadow = '4px 4px 10px grey';

    if (x) {
        silDeyer++
        const cardEl = x.closest('.card');
        const cardTit = cardEl.querySelector('.card-title');
        del.innerHTML = `${silDeyer} ${cardTit.textContent}`;
    }
}

function delet(x) {
    const cardElement = x.closest('.card');
    const cardTitle = cardElement.querySelector('.card-title').textContent;
    const silinəcəkIndex = arr.findIndex(item => item.name === cardTitle);

    if (silinəcəkIndex !== -1) {

        arr.splice(silinəcəkIndex, 1);
        ok(arr);


    }

}


function goster() {
    sec1.style.display = 'flex'
}

function gizle() {
    sec1.style.display = 'none'
}