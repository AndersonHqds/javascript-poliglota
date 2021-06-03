export const logExecutionTime = (method, property, args) => {
  console.log("start logExecutionTime");
  console.time(property);
  const result = method(...args);
  console.timeEnd(property);
  console.log("end logExecutionTime");
  return result;
};
export const inspectMethod = (excludeReturn = false) => {
  return (method, property, args) => {
    console.log("start inspectMethod");
    console.log(`Método decorado: ${property}`);
    console.log(`Argumentos do método: ${args}`);
    const result = method(...args);
    if (!excludeReturn) {
      console.log(`Resultado do método: ${result}`);
    }
    console.log("end inspectMethod");
    return result;
  };
};
