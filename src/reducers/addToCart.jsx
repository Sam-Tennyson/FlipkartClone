const add_To_Cart = (state=[], action)=> {
    // const [value, setValue] = useState('')
    switch(action.type) {
        case "ADD_TO_CART":
            console.log(action,"Action");
            let item = action.payload;
            return  [...state,item];
        default:
            return state;
    }
}

export default add_To_Cart