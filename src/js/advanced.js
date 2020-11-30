function compareFields(a, b) {
  if (a.key > b.key) return 1;
  return -1;
}

export function orderByProps(obj, sortFields) {
  const result = [];
  if (sortFields) {
    if (!Array.isArray(sortFields)) {
      throw new Error('Поля сортировки должны быть переданы массивом!');
    }
  }

  for (const prop in obj) {
    if (Array.isArray(sortFields) && sortFields.indexOf(prop) !== -1) {
      // eslint-disable-next-line no-continue
      continue;
    }

    result.push({ key: prop, value: obj[prop] });
  }

  result.sort(compareFields);

  if (sortFields) {
    sortFields.reverse();
    sortFields.forEach((element) => {
      result.unshift({ key: element, value: obj[element] });
    });
  }

  return result;
}

export function getSpecials(obj) {
  if (obj === null || obj === undefined) {
    throw new Error('Не передан объект');
  }

  if (!('special' in obj)) {
    throw new Error('В переданном объекте отсутствует информация о спец.атаках');
  }

  const result = [];
  // eslint-disable-next-line object-curly-newline
  for (const { id, name, icon, description = 'Описание недоступно' } of obj.special) {
    // eslint-disable-next-line object-curly-newline
    result.push({ id, name, icon, description });
  }

  return result;
}
