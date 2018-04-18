
// This  file contains list of all the api this angular application uses.
// This file also documenting how to use the api

import {environment} from '../environments/environment';
export const ServerUrl=environment.apiURL;

export const LogApi={
    restUrl:{url:()=>ServerUrl+'/api/logs'},
};




