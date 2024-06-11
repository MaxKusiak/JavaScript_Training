// let response = await fetch('../script/bands.json');
// let bands = await response.json();
let bands = [
    {
        "id": 2,
        "soloist": "Serj Tankian",
        "bandName": "SOAD",
        "icon": "https://static.posters.cz/image/750/%D0%9D%D0%B0%D0%BA%D0%BB%D0%B5%D0%B9%D0%BA%D0%B0/system-of-a-down-logo-i7795.jpg",
        "participants": [
            "Serj Tankian",
            "Shavo Odadjian",
            "Daron Vartan Malakian",
            "John Dolmayan"
        ],
        "tracks": [
            {
                "name": "Lonely Day",
                "duration": 167
            },
            {},
            {
                "name": "Chop Suey!",
                "duration": 212
            },
            {
                "name": "Sugar",
                "duration": 153
            },
            {
                "name": "Toxicity",
                "duration": 219
            }
        ]
    },
    {
        "id": 3,
        "soloist": "James Alan Hetfield",
        "bandName": "Metallica",
        "icon": "https://seeklogo.com/images/M/Metallica-logo-42A3DC5618-seeklogo.com.png",
        "participants": [
            "Kirk Lee Hammett",
            "James Alan Hetfield",
            "Roberto Agustín Miguel Santiago Samuel Trujillo Veracruz",
            "Lars Ulrich"
        ],
        "tracks": [
            {
                "name": "Master of Puppets",
                "duration": 313
            },
            {
                "name": "Fuel",
                "duration": 270
            },
            {
                "name": "The Unforgiven",
                "duration": 386
            },
            {
                "name": "Nothing Else Matters",
                "duration": 243
            }
        ]
    },
    {
        "id": 5,
        "soloist": "2D",
        "bandName": "Gorillaz",
        "icon": "",
        "participants": [
            "Murdoc Niccals",
            "2D",
            "Russel Hobbs",
            "Noodle"
        ],
        "tracks": [
            {
                "name": "Kids with Guns",
                "duration": 226
            },
            {
                "name": "Feel Good Inc",
                "duration": 222
            },
            {
                "name": "Clint Eastwood",
                "duration": 269
            },
            {
                "name": "",
                "duration": 0
            }
        ]
    },
    {
        "id": 12,
        "soloist": "Kurt Donald Cobain",
        "bandName": "Nirvana",
        "icon": "https://static.posters.cz/image/750/%D0%9D%D0%B0%D0%BA%D0%BB%D0%B5%D0%B9%D0%BA%D0%B0/nirvana-smiley-logo-i7802.jpg",
        "participants": [
            "Kurt Donald Cobain",
            "Krist Anthony Novoselić",
            "",
            "David Eric Grohl"
        ],
        "tracks": [
            {
                "name": "Smells Like Teen Spirit",
                "duration": 301
            },
            {
                "name": "Come As You Are",
                "duration": 228
            },
            {
                "name": "Heart-Shaped Box",
                "duration": 279
            },
            {
                "name": "Lithium",
                "duration": 257
            }
        ]
    },
    {
        "id": 23,
        "soloist": "Francis Albert Sinatra",
        "bandName": "Frank Sinatra",
        "icon": "https://seeklogo.com/images/F/frank-sinatra-logo-0D50EC75D0-seeklogo.com.png",
        "participants": [
            "Francis Albert Sinatra",
            "",
            "",
            ""
        ],
        "tracks": [
            {
                "name": "Strangers in the Night",
                "duration": 145
            },
            {
                "name": "Downtown",
                "duration": 135
            },
            {
                "name": "The Girl from Ipanema",
                "duration": 180
            },
            {
                "name": "Change Partners",
                "duration": 160
            }
        ]
    }
]
const hasOnlyDigits = (v) => /^\d+$/.test(v);

function compareNumbers(a, b) {
    return a - b;
}

function deletBand(bandId){
    document.getElementById(bandId).remove();
    bands.splice(bands.findIndex((band) => {return band.id == bandId}), 1);
}

function mdClose(bandId){
    document.getElementById("md" + bandId).style.visibility='hidden';
    document.getElementById("md" + bandId).remove();
}
function mdShow(bandId){
    let modalWindow = `<div class="md" id="md${bandId}">
        <div class="md_bg" id="md_bg${bandId}" onclick="mdClose(${bandId});"></div>
           <div class="md_dialog" id="md_dialog${bandId}">
            <div class="md_text" id="md_text${bandId}"><input id="inputFirst${bandId}" type="text" placeholder="Введіть назву треку" style="margin-bottom:10px;"><br><input id="inputSecond${bandId}" type="text" placeholder="Введіть тривалість треку в с" style="margin-bottom:10px;"> <br> <button onclick="addTrack(${bandId})" style="padding: 2px 3px;">add</button></div>
            <a class="md_close" id="md_close${bandId}" title="Закрити" onclick="mdClose(${bandId})">x</a>
            </div>
        </div>`;
    document.body.innerHTML += modalWindow;
    document.getElementById("md" + bandId).style.visibility='visible';
}

function createBandMdWindow(){
    let bandsLastId = bands.map(item => {return item.id});
    bandsLastId.sort(compareNumbers);
    bandsLastId = bandsLastId[bandsLastId.length - 1] + 1;
    let modalWindow = `<div class="md" id="md${bandsLastId}">
        <div class="md_bg" id="md_bg${bandsLastId}" onclick="mdClose(${bandsLastId});"></div>
           <div class="md_dialog" id="md_dialog${bandsLastId}">
            <div class="md_text" id="md_text${bandsLastId}">
                <input id="inputFirst${bandsLastId}" type="text" placeholder="Введіть шлях до лого групи" style="margin-bottom:10px;"><br>
                <input id="inputSecond${bandsLastId}" type="text" placeholder="Введіть назву групи" style="margin-bottom:10px;"><br>
                <input id="inputThird${bandsLastId}" type="text" placeholder="Введіть учасників через кому без пробілів. Перший з них - соліст" style="margin-bottom:10px;"><br>
                <button onclick="addBand(${bandsLastId})" style="padding: 2px 3px;">add</button></div>
            <a class="md_close" id="md_close${bandsLastId}" title="Закрити" onclick="mdClose(${bandsLastId})">x</a>
            </div>
        </div>`;
    document.body.innerHTML += modalWindow;
    document.getElementById("md" + bandsLastId).style.visibility='visible';
}
function addBand(bandId){
    let input1 = document.getElementById("inputFirst" + bandId).value;
    let input2 = document.getElementById("inputSecond" + bandId).value;
    let input3 = document.getElementById("inputThird" + bandId).value.split(",");
    bands.push({
        id: bandId,
        soloist: input3[0],
        bandName: input2,
        icon: input1,
        participants: input3.splice(1),
        tracks: []});
    document.body.innerHTML += generateBandInfo(bands[bands.length - 1], bands.length - 1);
    mdClose(bandId);
}

function addTrack(bandId){
    let list = document.getElementById("songsList" + bandId);
    let input1 = document.getElementById("inputFirst" + bandId).value;
    let input2 = document.getElementById("inputSecond" + bandId).value;
    if(input1 != "" && input2 != "" && !hasOnlyDigits(input1) && hasOnlyDigits(input2)){
        bands[bands.findIndex((band) => {return band.id == bandId})].tracks.push({
            "name" : `${input1}`,
            "duration" : parseInt(input2)
        });
        list.innerHTML += `<li class="song">${input1} - ${parseInt(parseInt(input2) / 60)} хв ${parseInt(input2) % 60} с</li>`;
        mdClose(bandId);
    }
}

function generateBandInfo(band, i){
    let errorSrc = 'https://placehold.co/250?text=' + band.bandName.split(" ").join("+");
    let left = `
        <div class="left">
            <div class="logo"><img src="${band.icon != null && band.icon.length != 0 ? band.icon : errorSrc}" alt="logo" class="logoImg" onerror="this.src = '${errorSrc}'"></div>
            <div class="bandName"><h2>${band.bandName != null && band.bandName.length != 0 ? band.bandName : "None"}</h2></div>
        </div>
    `;
    let right = `
        <div class="right">
            <div class="soloistName"><h2>${band.soloist != null && band.soloist.length != 0 ? band.soloist : "None"}</h2></div>
            <div class="participants"><p>${(band.participants != null && band.participants.length != 0) ? (band.participants.filter(participant => {return participant.length != 0 && participant != band.soloist}).length != 0 ? band.participants.filter(participant => {return participant.length != 0 && participant != band.soloist}) : "None") : ("None")}</p></div>
            <div class="songs">
                <ul class="songsList" id="songsList${band.id}">
                    ${band.tracks.map(track => {return (track.name != null && track.name.length != 0 && track.duration != null && track.duration != 0) ? (`<li class="song">${track.name} - ${parseInt(track.duration / 60)} хв ${track.duration % 60} с</li>`) : ""}).join("")}
                </ul>
            </div>
        </div>
    `;
    let htmlBlock = ``;
    if(i % 2 == 0){
        htmlBlock = `<div class="bandInfo" id="${band.id}">` + left + `<div class="space"></div>` + right + `<div class="deletBand" onclick="deletBand(${band.id})" style="right:40px;"></div> <button class="addTrack" onclick="mdShow(${band.id})" style="right:20px;">add track</button> </div>`;
    }else{
        htmlBlock = `<div class="bandInfo" id="${band.id}">` + right + `<div class="space"></div>` + left + `<div class="deletBand" onclick="deletBand(${band.id})" style="left:12px;"></div> <button class="addTrack" onclick="mdShow(${band.id})">add track</button> </div>`;
    }
    return htmlBlock;
}

for(let i = 0; i < bands.length; i++){
    document.body.innerHTML += generateBandInfo(bands[i], i);
}
