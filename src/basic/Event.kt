package basic
import kotlin.browser.document

var clickCount = 0

fun EventExample(){
    val title = "3.Event 예제입니다."
    val div =  document.createElement("div")
    div.apply {
        innerHTML   = "<div id = 'eventtest' style = 'font-size:20pt;'></div>"
        textContent = title

        addEventListener("mouseover", {
            textContent = "${title} - mouse over!!! "
            setAttribute("style", "font-size: 20pt; color : #FF0000")
        })

        addEventListener("mouseout", {
            textContent = "${title} - mouse out!!! "
            setAttribute("style", "font-size: 10pt; color : #333333")

        })

        addEventListener("click", {
            textContent = "click!!! ${clickCount++}"
            setAttribute("style", "font-size: 30pt; background-color : #333333; color:white")

        })

    }

    document.body!!.appendChild(div)
}