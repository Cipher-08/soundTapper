window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds')
    const pops = document.querySelectorAll('.pops div')

    const visual = document.querySelector('.label')
    const color = [
        " #d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"

    ];

    console.log(sounds)


    pops.forEach((pop, index) => {
        pop.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play()
            createBubbles(index)
        })
    })

    const createBubbles = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = "jump 1s ease"
    }
})
