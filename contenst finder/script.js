let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contenst) => {
    ihtml = ""
    for (item in contenst) {
        console.log(contenst[item]);
        ihtml +=
            `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${contenst[item].name}</h5>
        <p>Status is:${contenst[item].status}</p>
        <p> site is :${contenst[item].site}</p>       
        <p>Start at:${contenst[item].start_time} </p>
        <p>End at:${contenst[item].end_time} </p>
        <p>Duration:${contenst[item].duration} </p>
        <p>In 24 Hours:${contenst[item].in_24_hours
            } </p>
        <a href="${contenst[item].url}" class="btn btn-primary">Visit here</a>
        </div> 
        </div> 
        `
    }
    cardContainer.innerHTML = ihtml;
})