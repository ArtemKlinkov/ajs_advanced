function compareFields(a, b) {
  if (a.key > b.key) return 1;
  return -1;
}

export function orderByProps(obj, sortFields) {
  const result = [];
  if (sortFields) {
    if (typeof sortFields !== 'object') {
      throw new Error('Поля сортировки должны быть переданы массивом!');
    }
  }

  for (const prop in obj) {
    if (sortFields && sortFields.indexOf(prop) !== -1) {
      // eslint-disable-next-line no-continue
      continue;
    }

    result.push({ key: prop, value: obj[prop] });
  }

  result.sort(compareFields);

  if (sortFields) {
    sortFields.reverse().forEach((element) => {
      result.unshift({ key: element, value: obj[element] });
    });
  }

  return result;
}

// eslint-disable-next-line object-curly-newline
export function getSpecialsCallback({ id, name, icon, description = 'Описание недоступно' }) {
  // eslint-disable-next-line object-curly-newline
  return { id, name, icon, description };
}
