package basic

import kotlin.browser.document

var clickCount = 0

fun createDIV(){
    val display = document.getElementById("display")

    // null이면 그냥종료
    if(display == null ){
        println ("null입니다.!")
        return
    }

    // 코틀린에서 제공하는 함수(apply)
    display.apply {

        innerHTML = "<h1>Hi! click me!</h1>"
        addEventListener("click", {
               innerHTML = "click!"
        })

    }
    println ("null 아닙니다.\n ")

    val div =  document.createElement("div")
    div.apply {
        innerHTML   = "<div id = 'aaa' style = 'font-size:20pt;'></div>"
        textContent = "Hi"
        addEventListener("click", {
            textContent = "clicked!!! " + clickCount++
        })
    }

    document.body!!.appendChild(div)

}