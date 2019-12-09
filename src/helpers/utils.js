import moment from 'moment';

/**
 * Return current date
 * 
 * @returns {moment} mmt
 */
export const getCurrentDate = () => {
    return moment().format('DD/MM/YYYY');
}

/**
 * Return next month from the current
 * 
 * @param {moment} mmt
 */
export const getNextMonth = (mmt) => {
    return moment(mmt, 'DD/MM/YYYY').add(1, 'month').format('DD/MM/YYYY');
}

/**
 * Return row total
 * 
 * @param {Array} data
 */
export const rowTotal = (row, data) => {
    return data.reduce((sum, p) => {
        return sum + p[row]
    }, 0)     
}

/**
 * Format currency
 * 
 * @param {Number} val
 * @returns {string}
 */
export const formatCurrency = (val) => {
    return `£${
      (+val)
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }`;
  };


