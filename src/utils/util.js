export const regCollection = {
    nameReg: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,}$/,
    mobileReg: /^1[3456789]\d{9}$/,
    phoneReg: /^0\d{2,3}-?\d{7,8}$/,
    smsCodeReg: /^\d{6}$/,
    idCardReg: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/,
    emailReg: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
    numberReg: /^[0-9]*$/,
    bankNumReg: /^\d{16,19}$/,
    blankReg: /\s/
}

