import {Indicate, Toast} from '../../plugins/message/message'
import Promise from 'promise-polyfill'
import 'whatwg-fetch'

export default {
    get: function (url, params, headers) {
        if (params) {
            let paramsArray = []
            //encodeURIComponent
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        if (!headers) {
            headers = {}
        }
        if (url.indexOf('getBankName') < 0) {
            Indicate.open()
        }
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: headers
            }).then((response) => {
                Indicate.close()
                if (response.ok) {
                    response.json().then((result) => {
                        resolve(result)
                    })
                } else {
                    response.json().then((error) => {
                        // debugger
                        // Toast('系统维护中，请稍后')
                        // location.href = 'outservice.html'
                        reject(error)
                    })
                }
            }).catch((err) => {
                Indicate.close()
                location.href = 'outservice.html'
                // Toast('系统维护中，请稍后')
                reject({
                    error: err.message
                })
            })
        })
    },
    post: function (url, formData, headers) {
        if (!headers) {
            headers = {}
        }
        Indicate.open()
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: formData
            }).then((response) => {
                Indicate.close()
                if (response.ok) {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
                    response.json().then((result) => {
                        resolve(result)
                    })
                } else {
                    response.json().then((error) => {
                        if (!error) return
                        // Indicate.close()
                        reject(error)
                    })
                }
            }).catch((err) => {
                Indicate.close()
                // Toast('系统维护中，请稍后')
                location.href = 'outservice.html'
                reject({
                    error: err.message,
                    message: err.message
                })
            })
        })
    }
}
