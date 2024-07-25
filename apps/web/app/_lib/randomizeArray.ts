function randomizeArray<T>(array: T[]): T[] {
  // Create a copy of the original array to avoid mutating it
  const newArray: T[] = [...array];

  // randomize array algo
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    if (newArray[i] !== undefined && newArray[j] !== undefined) {
      const temp = newArray[i] as T;
      newArray[i] = newArray[j] as T;
      newArray[j] = temp;
    }
  }
  return newArray;
}

export default randomizeArray;
