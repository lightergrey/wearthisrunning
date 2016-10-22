/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SET_ADDRESS = 'wearthisrunning/Home/SET_ADDRESS';
export const SET_LATITUDE_LONGITUDE = 'wearthisrunning/Home/SET_LATITUDE_LONGITUDE';
export const SET_FORECAST = 'wearthisrunning/Home/SET_FORECAST';
