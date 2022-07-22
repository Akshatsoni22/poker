import moment from 'moment';

export const renderFormData = (values: any) => {
    var formData = new FormData();
    Object.keys(values).map(function (key, index) {
        formData.append(key, values[key])
    });
    return formData
}

export const getDate = (date:string) => {
    const formattedDate = moment(new Date(date)).format('DD, MMMM, YYYY');
    return formattedDate;
}

export const getLastURL = (location: any) => {
    let lastURL = location && location.pathname && location.pathname.split('/') && location.pathname.split('/').pop();
    return lastURL;
}

export const encodeID = (id: number) => {
    return id;
}
export const decodeID = (id: number) => {
    return id;
}
export const formatMoney = (amount: number) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
}

