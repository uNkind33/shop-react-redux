import phones from './mockPhones';

export const fetchPhones = async () => {
    return new Promise(resolve => {
        resolve(phones)
    })
}

export const fetchPhoneById = async id => {
    return new Promise((resolve, reject) => {
        debugger
        const phone = phones.map(item => {
            let newArr = [];
            let choosedId;
            debugger
            choosedId = item.id === id ? newArr.push(item.id) : null; 
            return choosedId;
        })
        console.log(phone)
        resolve(phone)
    })
}