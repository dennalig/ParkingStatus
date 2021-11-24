import {createContext} from 'react';
export const CurrentParsedTimeContext = createContext<Date>(new Date());
//used for tracking the id number 