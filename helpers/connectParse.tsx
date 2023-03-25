export const connectParse = (data: any) => {
  const con: string[] = [];
  data.split("\n").forEach((element: any) => {
    if (element.includes("CONECT")) {
      con.push(
        element.replace(/\s+/g, " ").substr(7, element.length).split(" ")
      );
    }
  });
  return con;
};
