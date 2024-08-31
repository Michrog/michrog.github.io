export default function boundary(from, to, number){
    let n
    if(number < from){
        n = from
    } else if (number > to){
        n = to
    } else {
        n = number
    }
    return n
}