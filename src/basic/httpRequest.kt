package basic

import org.w3c.dom.Element
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document

fun httpRequestTest(){

    val x = XMLHttpRequest()
    var doc = document.getElementById("root")
    if (doc == null){
        println("null")
        return
    }

    doc.innerHTML = "<b>HTTP 가져오기 - clcik</b>"
    doc.addEventListener("click", {

        x.open("get", "append.html")
        x.onreadystatechange = {
            //x.readyState x.status
            // return문 처리가 용의하지 않음.
            if(x.readyState == XMLHttpRequest.DONE){
                if (x.status ==  200.toShort()){
                    appendHTML(doc, x.responseText)
                }
            }
        }
        x.send()
    })

}

fun appendHTML(doc : Element, str : String){
    doc!!.innerHTML = doc!!.innerHTML + str
}
