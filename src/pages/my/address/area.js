import {provinceList, cityList, areaList} from '@/assets/data/area'

let cascadeData = []
for (let i = 0; i < provinceList.length; i++) {
    let province = provinceList[i]
    province.children = cityList[province.value]
    // console.log(province)
    for (let j = 0; j < province.children.length; j++) {
        let city = province.children[j]
        province.children[j].children = areaList[city.value]
    }
    cascadeData.push(province)
}
//
export default cascadeData
