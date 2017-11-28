import basic.CallJS
import basic.createDIV
import basic.innerHTML

// javascrip를 사용할 때는 프로젝트에서 main 함수는 오직 1개이어야 한다.
fun main( args : Array<String>){
    println("Hello browser")
    innerHTML()
    createDIV()
    CallJS()
}