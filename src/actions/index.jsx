export const increment = (num)=> {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const decrement = ()=> {
    return {
        type: 'DECREMENT'
        // payload: num
    }
}
export const addToCart = (newItem)=> {
    console.log("actionnnnnn");
    return {
        type: 'ADD_TO_CART',
        payload: newItem
    }
}

export const DetailViewer = (detail)=> {
    return {
        type: 'Detail_Viewer',
        payload: detail
    }
}

export const GetPrice = (price)=> {
    return {
        type: 'Get_Price',
        payload: price
    }
}

export const TotalItem = ()=> {
    return {
        type: 'Total_Item'
        // payload: item
    }
}


