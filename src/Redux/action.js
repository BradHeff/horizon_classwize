import { 
    LINK, STATUS } from './constants';

export const linkChange = (link) => ({
    type: LINK,
    payload: link
});

export const statusChange = (link) => ({
    type: STATUS,
    payload: link
});
