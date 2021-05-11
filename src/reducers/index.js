import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Barbie Girl', duration: '3.09'},
        {title: 'No Scrubs', duration: '4.01'},
        {title: 'I Want It That Way', duration: '3.34'},
        {title: 'All Stars', duration: '2.59'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

