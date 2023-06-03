let items = document.querySelectorAll('.accordion-item')
// console.log(items);

items.forEach(e =>{
    e.addEventListener('click', () =>{
        if (e.classList == "accordion-item") {
            items.forEach(item=>item.classList.remove('show'))
            // console.log(e);
            e.classList.add('show')
        }else{
            items.forEach(item=>item.classList.remove('show'))
        }
    })
})