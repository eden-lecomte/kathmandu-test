export const STORE_DATA = 'STORE_DATA';
export const TOGGLE_DATA_BY_ID = 'TOGGLE_DATA_BY_ID'
export const RESET_STATE = 'RESET_STATE'

export function storeData(dataArray, stateName) {
    return {
      type: 'STORE_DATA',
      text: 'Store data in an array to Redux state',
      target: stateName,
      dataArray,
    };
  }

export function toggleDataByID(ID, stateName) {
    return {
        type: 'TOGGLE_DATA_BY_ID',
        text: 'Add/remove from state based on an ID',
        ID,
        target: stateName,
    }
}
export function resetReduxState() {
    return{
        type: 'RESET_STATE'
    }
}
