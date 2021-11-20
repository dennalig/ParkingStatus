import {createContext} from 'react';

export const LSSContext = createContext(true);
// This useContext helps us keep track of the validLSSID State in the lot creator
// so that it will disallow input if the id is not correct
// https://www.youtube.com/watch?v=lhMKvyLRWo0&list=PLLTzpdwgv_AeMMvCci1cmvW9N2Wp3VH-v&index=40