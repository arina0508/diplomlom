import moment from "moment";

console.log(moment());

window.moment = moment;

moment.updateLocale( language: 'en', localSpec: {week: {dow:1}} )
moment().startOf( unitOfTime: 'month').startOf( unitOfTime: 'week')
moment().endOf( unitOfTime: 'month').endOf( unitOfTime: 'week')
