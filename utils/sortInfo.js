function sortInformation(info) {
    const sorted = info.docs
    const paramsName = ['transaction_value','participating_org_narrative','transaction_value_value_date','participating_org_ref']    
    const tableArr = []
    // recorremos cada ojeto de la respuestam dado que el servidor IATI nos regresa los "row de la tabla en un 'desorden'"
    sorted.forEach((item,i) => {
        let auxBody = {}
        let maxLength = item.participating_org_narrative.length || 0
        //reconstruimos el 'row' (o fila) de la tabla, en formato Objeto para su manejo 
        for (let tableIndex = 0; tableIndex < maxLength; tableIndex ++ ){
            auxBody = {
                transaction_value:item.transaction_value[tableIndex] || 0,
                participating_org_narrative:item.participating_org_narrative[tableIndex] || '',
                transaction_value_value_date:item.transaction_value_value_date[tableIndex] || '',
                participating_org_ref:item.participating_org_ref[tableIndex] || '',
            }
            
            tableArr.push(auxBody)
        }
    })
    const tableSorted = {}
    // agrupamos por año y organizacion tal como se nos solicita
    tableArr.forEach(item =>{
        let dateYear = new Date(item.transaction_value_value_date).getFullYear()
        if (!isNaN(dateYear)){
            tableSorted[dateYear] = (tableSorted[dateYear]) ? tableSorted[dateYear] : {}
            tableSorted[dateYear] [item.participating_org_narrative] = (tableSorted[dateYear] [item.participating_org_narrative]) ? tableSorted[dateYear] [item.participating_org_narrative]+item.transaction_value : item.transaction_value
        }
    })
    return tableSorted
}
module.exports = {
    sortInformation
}

