import types from './types';
import axios from 'axios';

export function get_user(){
    return (dispatch) => {
        axios.get('/api/current_user').then( resp => {
            console.log('Server Resp:', resp);
        });  
    };
}
