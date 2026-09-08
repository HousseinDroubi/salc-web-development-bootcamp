const fun_1 = () => {
    const fun_2 = () => {
        const fun_3 = () => {
            console.log("Hi from function 3");
        }
        console.log("Hi from function 2");
        fun_3();
    }
    console.log("Hi from function 1");
    fun_2();
}

fun_1();