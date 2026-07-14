const counters = document.querySelectorAll(".stat b");

counters.forEach(counter => {

    let target = Number(counter.innerText);

    let count = 0;

    let speed = 25;

    let update = () => {

        if (count < target) {

            count++;

            counter.innerText = count;

            setTimeout(update, speed);

        }

    }

    counter.innerText = 0;

    update();

});

function openSuccessStories() {
    window.location.href = "success-stories.html";
}