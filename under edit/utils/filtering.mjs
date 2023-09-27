const compare = (txt, sub) =>
  txt.toLocaleLowerCase().includes(sub.toLocaleLowerCase());

function searchAlgorism(data, filterTxt) {
  return data.filter(
    (item) => compare(item.name, filterTxt) || compare(item.brand, filterTxt)
  );
}

export default searchAlgorism;
