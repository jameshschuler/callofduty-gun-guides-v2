import { atom } from 'jotai';

interface BreadcrumbsAtom {
  gameName?: string;
  categoryName?: string;
  guideName?: string;
}

export const breadcrumbsAtom = atom<BreadcrumbsAtom>({});
