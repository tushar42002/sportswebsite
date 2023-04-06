const float = document.querySelector('.float');
const float1 = document.querySelector('.float1');
const help = document.querySelector('.help');
const whatsup = document.querySelector('.whatsup');
const bars = document.querySelector('.bars');
const links = document.querySelector('.links');



// help.addEventListener('click', () => {

//     if (help.classList.contains('active')) {
//         whatsup.classList.remove('active');
//         float1.classList.remove('active');
//     } else {

//         float.classList.add('active');
//         help.classList.add('active');

//         setTimeout(()=>{
//             help.classList.remove('active');
//             float.classList.remove('active');
//         }, 3000)

//         if (whatsup.classList.contains('active')) {
//             whatsup.classList.remove('active');
//         }
//     }
// })

whatsup.addEventListener('click', () => {

    // if (whatsup.classList.contains('active')) {
    //     float.classList.remove('active');
    //     help.classList.remove('active');
    // } else {
        float1.classList.add('active');
        whatsup.classList.add('active');

        setTimeout(()=>{
            whatsup.classList.remove('active');
            float1.classList.remove('active');
        }, 3000)

        // if (help.classList.contains('active')) {
        //     help.classList.remove('active');
        //     float.classList.remove('active');
        // }
    // }
})

bars.addEventListener('click', () => {
    links.classList.toggle('active');
    if(links.classList.contains('active')){
        links.style.left= '0';
    }
})

