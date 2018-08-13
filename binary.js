const convertToNegBinary = (integer) => {
    let binary, negBinary;
    binary = integer.toString(2);
    console.log(`binary is ${binary}`);
    negBinary = (~ binary) + 1;
    console.log(`neg binary is ${negBinary}`)
    return negBinary
}

convertToNegBinary(514)
