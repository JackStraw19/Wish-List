const htmlRep = (thing, location) => {
    return `
    <div>
    <h3>I can purchase ${thing} at ${location}</h3>
    </div>
    `
}
const displayData = document.querySelector("#displayData")
displayData.addEventListener("click", () => {
    const thing = document.querySelector("#thing").value
    const location = document.querySelector("#location").value
    const thingLocation = htmlRep(thing, location)
    const wishList = document.querySelector("#wishList")
    if (thing === "" || location === "") {
        alert("Enter in all information!")
    } else {
        wishList.innerHTML += thingLocation
        document.querySelector("#thing").value = ""
        document.querySelector("#location").value = ""
        document.querySelector("#thing").focus()
    }
})


