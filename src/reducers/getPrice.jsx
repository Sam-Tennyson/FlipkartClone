const getPrice = (state = 0, action)=> {
    switch(action.type) {
        case "Get_Price":
            return state+action.payload
        default:
            return state
    }
}
export default getPrice
// const counterReducer = (state=0, action)=> {
//     // const [value, setValue] = useState(state)
//     switch(action.type) {
//         case "INCREMENT":
//             return state+action.payload;
//         case "DECREMENT":
//             return state-1;
//         default:
//             return state;
//     }
// }

// export default counterReducer