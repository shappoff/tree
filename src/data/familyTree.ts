import type { FamilyTreeData } from '@alexbrand09/famtreejs';

export interface PersonCardData {
  name: string;
  years: string;
}

/** Demo family (Petrovs) for famtreejs. */
export const familyTreeData: FamilyTreeData<PersonCardData> = {
  people: [
    { id: 'gf', data: { name: 'Пётр Иванов', years: '1910–1985' } },
    { id: 'gm', data: { name: 'Анна Иванова', years: '1915–1990' } },
    { id: 'f', data: { name: 'Иван Петров', years: '1940–' } },
    { id: 'm', data: { name: 'Мария Петрова', years: '1945–' } },
    { id: 'c1', data: { name: 'Алексей Петров', years: '1970–' } },
    { id: 'c1w', data: { name: 'Ольга Петрова', years: '1972–' } },
    { id: 'c2', data: { name: 'Елена Смирнова', years: '1975–' } },
    { id: 'gc1', data: { name: 'Дмитрий Петров', years: '2000–' } },
  ],
  partnerships: [
    { id: 'u1', partnerIds: ['gf', 'gm'], childIds: ['f'] },
    { id: 'u2', partnerIds: ['f', 'm'], childIds: ['c1', 'c2'] },
    { id: 'u3', partnerIds: ['c1', 'c1w'], childIds: ['gc1'] },
  ],
  rootPersonId: 'f',
};
