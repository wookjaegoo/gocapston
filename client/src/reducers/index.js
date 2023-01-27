import { combineReducers } from "redux";




  

// const songsReducer =() =>{
    
//     //여기서 json song파일을 import하는게 아닌 
//     //블록에서 json파일 가져와서 가공해야할거같은데..
//     //js파일로 블록 리스트 데이터 전부 반환해서 여기로 던지면 json으로 던질수잇을까? 이걸 지금 해보자
   
//     return songs;
// };



const selectedSongIdReducer = (selectedSongId = 0, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload.id;
    }
    if (action.type === "SONG_SELECTED_BY_ID") {
        return action.payload;
    }
    return selectedSongId;
};

const playerStateReducer = (playerState = 0, action) => {
    if (action.type === "PLAYER_STATE_SELECTED" && !action.payload) {
        return (playerState + 1) % 2;
    } else if (action.type === "PLAYER_STATE_SELECTED" && action.payload) {
        return action.payload;
    }
    return playerState;
};

const volumeReducer = (volume = 100, action) => {
    if (action.type === "SET_VOLUME") {
        return action.payload;
    }
    return volume;
};

const durationReducer = (duration = 0, action) => {
    if (action.type === "SET_DURATION") {
        return action.payload;
    }
    return duration;
};

const currentLocationReducer = (loc = 0, action) => {
    if (action.type === "SET_CURRENT_LOCATION") {
        return action.payload;
    }
    return loc;
};



export default combineReducers({
    // songs: songsReducer,
    selectedSongId: selectedSongIdReducer,
    playerState: playerStateReducer,
    volume: volumeReducer,
    duration: durationReducer,
    currentLocation: currentLocationReducer,
    
});

  