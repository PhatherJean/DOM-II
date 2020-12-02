// Your code goes here
// Your code goes here
const link = document.querySelectorAll('nav a');
const text = document.querySelectorAll('p');
const title = document.querySelectorAll('h1,h2,h4')

Array.from(link).forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        item.style.color = 'red';
        e.target.style.fontSize = '4rem'
    
    }, false);
})

Array.from(link).forEach((item) => {
    item.addEventListener('mouseleave', (e) => {
        e.target.style.color = '#BADA55';
        e.target.style.fontSize = '';
    setTimeout((e) => {
        item.style.color = ''
    }, 600)    
    }, false)
})

 Array.from(text).forEach((word) => {
    word.addEventListener('mouseover', (e) => {
        e.target.style.fontSize = '1.8rem';
        e.target.style.backgroundColor = 'black'
        e.target.style.color = 'yellow'
    });
})

Array.from(text).forEach((word) => {
    word.addEventListener('mouseout', (e) => {
        e.target.style.fontSize = '';
        e.target.style.backgroundColor = '';
        e.target.style.color = '';
    });
})

