const url = 'https://fakestoreapi.com/products';
fetch(url)
.then((res) => res.json())
.then(data => {
    let cont = document.getElementById('contiuner');
    cont.classList.add('container'); 

    data.map(element => {
        let itemDiv = document.createElement('div'); 

        let imgg = document.createElement('img'); 
        imgg.src = element.image;

        let text = document.createElement('h1'); 
        text.textContent = element.title;

        let pricce = document.createElement('p'); 
        pricce.textContent = element.price;

       
        itemDiv.appendChild(imgg);
        itemDiv.appendChild(text);
        itemDiv.appendChild(pricce);
        cont.appendChild(itemDiv);
    });
});
