import React from 'react';

import { sortFacetChoices } from './Facets';

describe('sortFacetChoices', () => {
  it('sort choices with string labels', () => {
    const choices = [
      { label: 'b' },
      { label: 'd' },
      { label: 'a' },
      { label: 'c' },
    ];
    const sortedChoices = sortFacetChoices(choices);
    expect(sortedChoices).toStrictEqual([
      { label: 'a' },
      { label: 'b' },
      { label: 'c' },
      { label: 'd' },
    ]);
  });
  it('sort choices with int labels', () => {
    const choices = [{ label: 7 }, { label: 3 }, { label: 1 }, { label: 4 }];
    const sortedChoices = sortFacetChoices(choices);
    expect(sortedChoices).toStrictEqual([
      { label: 1 },
      { label: 3 },
      { label: 4 },
      { label: 7 },
    ]);
  });
  it('sort choices with labels of any kind', () => {
    const choices = [
      { label: 7 },
      { label: '1' },
      { label: 'b' },
      { label: 5 },
    ];
    const sortedChoices = sortFacetChoices(choices);
    expect(sortedChoices).toStrictEqual([
      { label: 7 },
      { label: '1' },
      { label: 'b' },
      { label: 5 },
    ]);
  });
});
