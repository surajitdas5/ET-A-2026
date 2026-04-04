export function dateForamatter(date){
    let newDate = new Date(date.split("T")[0])
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}