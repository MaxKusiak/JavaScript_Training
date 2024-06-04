// let response = await fetch('./bands.json');
// let bands = await response.json();

function generateBandInfo(band, i){
    // let tracks = band.tracks.filter(track => {return track.name != null && track.name.length != 0 && track.duration != null && track.duration != 0});
    // let tracksLi = ``;
    // for(let i = 0; i < tracks.length; i++){
    //         tracksLi += `<li class="song">${tracks[i].name} - ${parseInt(tracks[i].duration / 60)} хв ${tracks[i].duration % 60} с</li>`;
    // }
    let left = `
        <div class="left">
            <div class="logo"><img src="${band.icon != null && band.icon.length != 0 ? band.icon : "https://placehold.co/250"}" alt="logo" class="logoImg"></div>
            <div class="bandName"><h2>${band.bandName != null && band.bandName.length != 0 ? band.bandName : "None"}</h2></div>
        </div>
    `;
    let right = `
        <div class="right">
            <div class="soloistName"><h2>${band.soloist != null && band.soloist.length != 0 ? band.soloist : "None"}</h2></div>
            <div class="participants"><p>${(band.participants != null && band.participants.length != 0) ? (band.participants.filter(participant => {return participant.length != 0 && participant != band.soloist}).length != 0 ? band.participants.filter(participant => {return participant.length != 0 && participant != band.soloist}) : "None") : ("None")}</p></div>
            <div class="songs">
                <ul class="songsList">
                    <!-- ${tracksLi.length != 0 ? tracksLi : "None"} -->
                    ${band.tracks.map(track => {return (track.name != null && track.name.length != 0 && track.duration != null && track.duration != 0) ? (`<li class="song">${track.name} - ${parseInt(track.duration / 60)} хв ${track.duration % 60} с</li>`) : ""}).join("")}
                </ul>
            </div>
        </div>
    `;
    let htmlBlock = ``;
    if(i % 2 == 0){
        htmlBlock = `<div class="bandInfo">` + left + `<div class="space"></div>` + right + `</div>`;
    }else{
        htmlBlock = `<div class="bandInfo">` + right + `<div class="space"></div>` + left + `</div>`;
    }
    return htmlBlock;
}

for(let i = 0; i < bands.length; i++){
    document.body.innerHTML += generateBandInfo(bands[i], i);
}
