interface Atom {
  name: string;
  x: number;
  y: number;
  z: number;
}

export const atomsParse = (data : any) => {
  const atm: Atom[] = [];
  data.split("\n").forEach((element: any) => {
    console.log("element =>",element)
    if (element.includes("ATOM")) {
      let elem = element.replace(/\s+/g, " ").split(" ");
      const name = elem[11].length > 1 ?  elem[11][0].toUpperCase() + elem[11][1].toLowerCase() : elem[11];
      atm.push({x : Number(elem[6]), y : Number(elem[7]), z : Number(elem[8]), name});
    }
  });
  return atm;
}