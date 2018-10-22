import basic.*

// javascrip를 사용할 때는 프로젝트에서 main 함수는 오직 1개이어야 한다.
fun main( args : Array<String>){
    // console에 찍는예제
    println("Hello browser")

    // 1.element 처리예제
    innerHTML()

    // 2. 동적으로 Elements 생성예제
    createDIV()

    // 3. JavaScript 호출예제
    CallJS()

    // 4. Event Example
    EventExample()

    // 5. HTTP Example
    httpRequestTest()
}