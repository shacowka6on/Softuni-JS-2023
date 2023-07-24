function songs(arr){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    const n = arr[0];
    const typeToPlay = arr[arr.length - 1].split('_')[0];
    const songs = [];

    for (let i = 1; i < arr.length - 1; i++) {
        let [typeList, name, type] = arr[i].split('_');
        songs.push(new Song(typeList, name, type));
    }
    if(typeToPlay == 'all'){
        songs.forEach((s) => console.log(s.name));
    }else{
        songs
        .filter((s) => s.type === typeToPlay)
        .forEach((s) => console.log(s.name));
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
 songs([2,
 'like_Replay_3:15',
 'ban_Photoshop_3:48',
 'all'])