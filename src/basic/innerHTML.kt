package basic
import kotlin.browser.document

fun innerHTML(){
    val display = document.getElementById("display")

    val html = """
<h1>1.Hello World</h1>

    """
    // null이면 그냥종료
    if(display == null ){
        println ("null입니다.!")
        return
    }

    println ("null 아닙니다.\n $html ")
    display.innerHTML = html

    display.setAttribute("style", "font-size; 30pt; background-color:#FFFF00")
}