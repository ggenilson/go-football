export function paginateData(data: any[], numberByPage: number) {
  let dataDivided: any[] = [];

  while (data.length) {
    dataDivided = [...dataDivided, data.slice(0, numberByPage)];
    data.splice(0, numberByPage);
  }

  return dataDivided;
}
