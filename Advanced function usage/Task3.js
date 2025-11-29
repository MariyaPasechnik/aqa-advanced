function divide (numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number"){
            throw new Error ("One of the arguments is not a number");
    } else if (denominator === 0 )
        { throw new Error ("Denominator equals 0");
    } else {
        return numerator / denominator;
    }
   
        
}
try {
    divide ("small", "crew")
} catch (error) {
    console.log(error.message);

} finally {
    console.log("Done");
}
try {
    divide (5, 0)
} catch (error) {
    console.log(error.message);
} finally {
    console.log ("Done");
}
