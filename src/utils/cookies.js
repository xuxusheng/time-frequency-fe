import Cookies from 'js-cookie';

const auth = {
    setCookies: function (name, value, obj) {
        return Cookies.set(name, value, obj)

    },
    getCookies: function (name) {
        return Cookies.get(name)

    },
    removeCookies: function (name) {
        return Cookies.remove(name)
    }
};
export {auth}