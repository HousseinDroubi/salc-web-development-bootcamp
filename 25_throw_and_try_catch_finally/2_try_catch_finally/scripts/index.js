try{
    console.log(x);
    const x = 10;

    // The following line won't be reached if any error occur before it
    console.log(`End line of try`);
}catch(error){
    // Log to user that something went wrong
    // repeat another time
    console.log(`Printing error inside log ${error}`)
}finally{
    // closing files
    console.log(`This is inside finally clause`);
}


console.log(`-----End Line -----`);