package basic
import kotlin.browser.document

fun createDIV(){

    val div =  document.createElement("div")
    div.apply {
        innerHTML   = "<div id = 'createID' style = 'font-size:30pt;'></div>"
        textContent = "2.생성된 div(createID)입니다. "
    }

    document.body!!.appendChild(div)

}