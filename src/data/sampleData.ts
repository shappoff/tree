import type { Datum } from 'family-chart';

export interface FamilyChartPerson extends Datum {
  data: {
    gender: 'M' | 'F';
    'first name': string;
    'last name': string;
    birthday?: string;
    avatar?: string;
  };
}

export const familyChartData: FamilyChartPerson[] = [
  {
    id: 'gf',
    data: { gender: 'M', 'first name': 'Пётр', 'last name': 'Иванов', birthday: '1910' },
    rels: { spouses: ['gm'], children: ['f'], parents: [] },
  },
  {
    id: 'gm',
    data: { gender: 'F', 'first name': 'Анна', 'last name': 'Иванова', birthday: '1915' },
    rels: { spouses: ['gf'], children: ['f'], parents: [] },
  },
  {
    id: 'f',
    data: { gender: 'M', 'first name': 'Иван', 'last name': 'Петров', birthday: '1940' },
    rels: { spouses: ['m'], children: ['c1', 'c2'], parents: ['gf', 'gm'] },
  },
  {
    id: 'm',
    data: { gender: 'F', 'first name': 'Мария', 'last name': 'Петрова', birthday: '1945' },
    rels: { spouses: ['f'], children: ['c1', 'c2'], parents: [] },
  },
  {
    id: 'c1',
    data: { gender: 'M', 'first name': 'Алексей', 'last name': 'Петров', birthday: '1970' },
    rels: { spouses: ['c1w'], children: ['gc1'], parents: ['f', 'm'] },
  },
  {
    id: 'c1w',
    data: { gender: 'F', 'first name': 'Ольга', 'last name': 'Петрова', birthday: '1972' },
    rels: { spouses: ['c1'], children: ['gc1'], parents: [] },
  },
  {
    id: 'c2',
    data: { gender: 'F', 'first name': 'Елена', 'last name': 'Смирнова', birthday: '1975' },
    rels: { spouses: [], children: [], parents: ['f', 'm'] },
  },
  {
    id: 'gc1',
    data: { gender: 'M', 'first name': 'Дмитрий', 'last name': 'Петров', birthday: '2000' },
    rels: { spouses: [], children: [], parents: ['c1', 'c1w'] },
  },
];

export interface DTreeNode {
  name: string;
  class?: string;
  textClass?: string;
  marriages?: {
    spouse?: { name: string };
    children?: DTreeNode[];
  }[];
}

export const dTreeData: DTreeNode[] = [
  {
    name: 'Пётр Иванов (1910)',
    marriages: [
      {
        spouse: { name: 'Анна Иванова (1915)' },
        children: [
          {
            name: 'Иван Петров (1940)',
            marriages: [
              {
                spouse: { name: 'Мария Петрова (1945)' },
                children: [
                  {
                    name: 'Алексей Петров (1970)',
                    marriages: [
                      {
                        spouse: { name: 'Ольга Петрова (1972)' },
                        children: [{ name: 'Дмитрий Петров (2000)' }],
                      },
                    ],
                  },
                  { name: 'Елена Смирнова (1975)' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const topolaGedcomData = {
  indis: [
    { id: 'I1', firstName: 'Пётр', lastName: 'Иванов', sex: 'M', birth: { date: { year: 1910 } } },
    { id: 'I2', firstName: 'Анна', lastName: 'Иванова', sex: 'F', birth: { date: { year: 1915 } } },
    { id: 'I3', firstName: 'Иван', lastName: 'Петров', sex: 'M', birth: { date: { year: 1940 } }, famc: 'F1' },
    { id: 'I4', firstName: 'Мария', lastName: 'Петрова', sex: 'F', birth: { date: { year: 1945 } } },
    { id: 'I5', firstName: 'Алексей', lastName: 'Петров', sex: 'M', birth: { date: { year: 1970 } }, famc: 'F2' },
    { id: 'I6', firstName: 'Ольга', lastName: 'Петрова', sex: 'F', birth: { date: { year: 1972 } } },
    { id: 'I7', firstName: 'Елена', lastName: 'Смирнова', sex: 'F', birth: { date: { year: 1975 } }, famc: 'F2' },
    { id: 'I8', firstName: 'Дмитрий', lastName: 'Петров', sex: 'M', birth: { date: { year: 2000 } }, famc: 'F3' },
  ],
  fams: [
    { id: 'F1', husb: 'I1', wife: 'I2', children: ['I3'] },
    { id: 'F2', husb: 'I3', wife: 'I4', children: ['I5', 'I7'] },
    { id: 'F3', husb: 'I5', wife: 'I6', children: ['I8'] },
  ],
};

export const famtreejsData = {
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
    { id: 'u1', partnerIds: ['gf', 'gm'] as [string, string], childIds: ['f'] },
    { id: 'u2', partnerIds: ['f', 'm'] as [string, string], childIds: ['c1', 'c2'] },
    { id: 'u3', partnerIds: ['c1', 'c1w'] as [string, string], childIds: ['gc1'] },
  ],
  rootPersonId: 'f',
};

export interface PedigreeMember {
  id: string;
  name: string;
  sex: 'M' | 'F';
  parents?: [string | null, string | null];
  children?: string[];
}

export const pedigreeMembers: PedigreeMember[] = [
  { id: 'gf', name: 'Пётр И.', sex: 'M', children: ['f'] },
  { id: 'gm', name: 'Анна И.', sex: 'F', children: ['f'] },
  { id: 'f', name: 'Иван П.', sex: 'M', parents: ['gf', 'gm'], children: ['c1', 'c2'] },
  { id: 'm', name: 'Мария П.', sex: 'F', children: ['c1', 'c2'] },
  { id: 'c1', name: 'Алексей П.', sex: 'M', parents: ['f', 'm'], children: ['gc1'] },
  { id: 'c1w', name: 'Ольга П.', sex: 'F', children: ['gc1'] },
  { id: 'c2', name: 'Елена С.', sex: 'F', parents: ['f', 'm'] },
  { id: 'gc1', name: 'Дмитрий П.', sex: 'M', parents: ['c1', 'c1w'] },
];

export const balkanNodes = [
  { id: 1, pids: [2], name: 'Пётр Иванов', gender: 'male', bdate: '1910' },
  { id: 2, pids: [1], name: 'Анна Иванова', gender: 'female', bdate: '1915' },
  { id: 3, pids: [4], mid: 2, fid: 1, name: 'Иван Петров', gender: 'male', bdate: '1940' },
  { id: 4, pids: [3], name: 'Мария Петрова', gender: 'female', bdate: '1945' },
  { id: 5, pids: [6], mid: 4, fid: 3, name: 'Алексей Петров', gender: 'male', bdate: '1970' },
  { id: 6, pids: [5], name: 'Ольга Петрова', gender: 'female', bdate: '1972' },
  { id: 7, mid: 4, fid: 3, name: 'Елена Смирнова', gender: 'female', bdate: '1975' },
  { id: 8, mid: 6, fid: 5, name: 'Дмитрий Петров', gender: 'male', bdate: '2000' },
];

export const graphNodes = [
  { id: 'gf', label: 'Пётр Иванов\n1910', group: 'male' },
  { id: 'gm', label: 'Анна Иванова\n1915', group: 'female' },
  { id: 'f', label: 'Иван Петров\n1940', group: 'male' },
  { id: 'm', label: 'Мария Петрова\n1945', group: 'female' },
  { id: 'c1', label: 'Алексей Петров\n1970', group: 'male' },
  { id: 'c1w', label: 'Ольга Петрова\n1972', group: 'female' },
  { id: 'c2', label: 'Елена Смирнова\n1975', group: 'female' },
  { id: 'gc1', label: 'Дмитрий Петров\n2000', group: 'male' },
];

export const graphEdges = [
  { from: 'gf', to: 'f', type: 'parent' },
  { from: 'gm', to: 'f', type: 'parent' },
  { from: 'f', to: 'c1', type: 'parent' },
  { from: 'm', to: 'c1', type: 'parent' },
  { from: 'f', to: 'c2', type: 'parent' },
  { from: 'm', to: 'c2', type: 'parent' },
  { from: 'c1', to: 'gc1', type: 'parent' },
  { from: 'c1w', to: 'gc1', type: 'parent' },
  { from: 'gf', to: 'gm', type: 'spouse', dashes: true },
  { from: 'f', to: 'm', type: 'spouse', dashes: true },
  { from: 'c1', to: 'c1w', type: 'spouse', dashes: true },
];

export const reactD3TreeData = {
  name: 'Пётр Иванов (1910)',
  children: [
    {
      name: 'Иван Петров (1940)',
      attributes: { spouse: 'Мария Петрова (1945)' },
      children: [
        {
          name: 'Алексей Петров (1970)',
          attributes: { spouse: 'Ольга Петрова (1972)' },
          children: [{ name: 'Дмитрий Петров (2000)' }],
        },
        { name: 'Елена Смирнова (1975)' },
      ],
    },
  ],
};
