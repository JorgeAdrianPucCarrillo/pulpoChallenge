function sortInformationAsJson(info,year) {
    try{
        const sortedDocs = info.docs || info
        const tableArray = []
        // recorremos cada ojeto de la respuestam dado que el servidor IATI nos regresa los "row de la tabla en un 'desorden'"
        sortedDocs.forEach((item,i) => {
            // validando objeto Item 
            item.transaction_value = (item.transaction_value) ? item.transaction_value : []
            item.participating_org_narrative = (item.participating_org_narrative) ? item.participating_org_narrative : []
            item.transaction_value_value_date = (item.transaction_value_value_date) ? item.transaction_value_value_date : []
            item.participating_org_ref = (item.participating_org_ref) ? item.participating_org_ref : []
            let auxBody = {}
            let orgNarrativeLength = item.participating_org_narrative.length || 0
            //reconstruimos el 'row' (o fila) de la tabla, en formato Objeto para su manejo 
            for (let tableIndex = 0; tableIndex < orgNarrativeLength; tableIndex ++ ){
                auxBody = {
                    transaction_value:item.transaction_value[tableIndex] || 0,
                    participating_org_narrative:item.participating_org_narrative[tableIndex] || '',
                    transaction_value_value_date:item.transaction_value_value_date[tableIndex] || '',
                    participating_org_ref:item.participating_org_ref[tableIndex] || '',
                }
                
                tableArray.push(auxBody)
            }
        })
        const tableSorted = {}
        // agrupamos por año y organizacion tal como se nos solicita
        tableArray.forEach(item =>{
            let dateYear = new Date(item.transaction_value_value_date).getFullYear()
            if (!isNaN(dateYear) && dateYear < year){   // nos aseguramos que la fecha de transaccion es un año y este año es en el rango del tiempo solicitado 
                                                        // dado que fechas en 31 de diciembre y primero de enero el API IATI las devuelve dentro del rango solicitado 
                                                        //aun que esto no debe ser asi
                tableSorted[dateYear] = (tableSorted[dateYear]) ? tableSorted[dateYear] : {}
                tableSorted[dateYear] [item.participating_org_narrative] = (tableSorted[dateYear] [item.participating_org_narrative]) ? tableSorted[dateYear] [item.participating_org_narrative]+item.transaction_value : item.transaction_value
            }
        }) 
        return tableSorted
    }catch(e){
        return {}
    }
}
function sortInformationAsArray(info,year) {
    try{
        const sortedDocs = (Array.isArray(info.docs)) ? info.docs : []
        let tableArray = []
        // recorremos cada ojeto de la respuestam dado que el servidor IATI nos regresa los "row de la tabla en un 'desorden'"
        sortedDocs.forEach(item => {
            // validando objeto Item 
            item.transaction_value = (item.transaction_value) ? item.transaction_value : []
            item.participating_org_narrative = (item.participating_org_narrative) ? item.participating_org_narrative : []
            item.transaction_value_value_date = (item.transaction_value_value_date) ? item.transaction_value_value_date : []
            item.participating_org_ref = (item.participating_org_ref) ? item.participating_org_ref : []
            //reconstruimos el 'row' (o fila) de la tabla, en formato Objeto para su manejo
            
            let orgNarrativeLength = item.participating_org_narrative.length || 0
            //reconstruimos el 'row' (o fila) de la tabla, en formato Objeto para su manejo 
            for (let tableIndex = 0; tableIndex < orgNarrativeLength; tableIndex ++ ){
                if(item.transaction_value_value_date[tableIndex] && item.participating_org_narrative[tableIndex] && item.transaction_value[tableIndex]){
                    tableArray.push({ 
                        yearTransaction: item.transaction_value_value_date[tableIndex],
                        organizationsName: item.participating_org_narrative[tableIndex],
                        value: item.transaction_value[tableIndex]
                    })
                }
            }
            
        })
        let tableByYear = []
        tableArray.forEach(item=>{
            let dateYear = new Date(item.yearTransaction).getFullYear()
            if (!isNaN(dateYear) && dateYear < year){
                let yearIndex = tableByYear.findIndex(obj => obj.yearTransaction == dateYear)
                    if (yearIndex > -1){
                        let orgIndex = tableByYear[yearIndex].organizations.findIndex(obj => obj.name == item.organizationsName)
                        if (orgIndex > -1){
                            tableByYear[yearIndex].organizations[orgIndex].value += item.value
                        }else{
                            tableByYear[yearIndex].organizations.push({name:item.organizationsName,value:item.value})
                        }
                    }else{
                        tableByYear.push({yearTransaction:dateYear,organizations:[{name:item.organizationsName,value:item.value}]})
                    }

            }
            tableByYear.forEach((yearItem,i)=>{
                tableByYear[i].organizations = yearItem.organizations.sort(function(a, b) {
                    return b.value - a.value;
                  })
            })
        })
        tableByYear.sort(function(a, b) {
            return b.yearTransaction - a.yearTransaction;
          })
        return tableByYear
    }catch(e){
        console.log(e)
        return []
    }
}
module.exports = {
    sortInformationAsJson,
    sortInformationAsArray
}

