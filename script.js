const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circles=document.querySelectorAll('.circle')


//
let currentActive=1

next.addEventListener('click', ()=> {
    //adds +1 for the currentActive
    currentActive++

    if(currentActive > circles.length) {
        currentActive=circles.length
    }

    update()
})

prev.addEventListener('click', ()=> {
    //substracts -1 for the currentActive
    currentActive--

    if(currentActive <1) {
        currentActive=1
    }

    update()
})

function update() {
    //looping through circles to make them non-/active

    circles.forEach((circle, idx) => {
        //idx-index for each particular circle
        if(idx<currentActive) {
            circle.classList.add('active')
        } else {
    circle.classList.remove('active')
        } 
    
    })
    //these 2 lines of code make the line change the color to a darker one between the active circles
    const actives=document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/(circles.length-1)*100+'%'
 
}