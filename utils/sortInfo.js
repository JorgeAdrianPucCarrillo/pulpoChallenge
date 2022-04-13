function sortInformation(info) {
    const sorted = info.docs
    const paramsName = ['transaction_value','participating_org_narrative','transaction_value_value_date','participating_org_ref']    
    const tableArr = []
    // recorremos cada ojeto de la respuestam dado que el servidor IATI nos regresa los "row de la tabla en un 'desorden'"
    sorted.forEach((item,i) => {
        let aux = {}
        let maxLength = 0
        paramsName.forEach(paramName => {
            item[paramName]=(item[paramName]) ? item[paramName] : ['n/a']
            maxLength = (item[paramName].length > maxLength) ? item[paramName].length : maxLength
        })
        // reconstruimos el 'row' (o fila) de la tabla, en formato Objeto para su manejo 
        for (let tableIndex = 0; tableIndex < maxLength; tableIndex ++ ){
            try{
                aux = {
                    transaction_value:item.transaction_value[tableIndex] || tableArr[tableIndex-1].transaction_value,
                    participating_org_narrative:item.participating_org_narrative[tableIndex] || tableArr[tableIndex-1].participating_org_narrative,
                    transaction_value_value_date:item.transaction_value_value_date[tableIndex] || tableArr[tableIndex-1].transaction_value_value_date,
                    participating_org_ref:item.participating_org_ref[tableIndex] || tableArr[tableIndex-1].participating_org_ref,
                }
            }catch(e){
                //deberia colocar un return null aqui para regresar un 400 ?
                aux = {
                    transaction_value:0,
                    participating_org_narrative:'',
                    transaction_value_value_date:'',
                    participating_org_ref:'',
                }
            }
            tableArr.push(aux)
        }
    })
    const tableSorted = {}
    // agrupamos por año y organizacion tal como se nos solicita
    tableArr.forEach(item =>{
        let dateYear = new Date(item.transaction_value_value_date).getFullYear()
        tableSorted[dateYear] = (tableSorted[dateYear]) ? tableSorted[dateYear] : {}
        tableSorted[dateYear] [item.participating_org_narrative] = (tableSorted[dateYear] [item.participating_org_narrative]) ? tableSorted[dateYear] [item.participating_org_narrative]+item.transaction_value : item.transaction_value
    })
    return tableSorted
}
module.exports = {
    sortInformation
}