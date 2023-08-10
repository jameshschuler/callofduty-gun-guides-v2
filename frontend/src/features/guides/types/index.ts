export interface Guide {
  guideId: number;
  slug: string;
  title: string;
  guideWeaponName?: string;
  primary?: Weapon;
  secondary?: Weapon;
  equipment?: Equipment;
  perks?: string[][];
  wildcard?: string;
}

export interface Weapon {
  name: string;
  attachments: string[];
  link?: string;
}

export interface Equipment {
  lethal?: string;
  tactical?: string;
  fieldUpgrade?: string;
}

export interface GuidesResponse {
  gameName: string;
  categoryName: string;
  guideCount: number;
  guides: Guide[];
}

export interface GuideDetailsResponse {
  gameName: string;
  categoryName: string;
  guide: Guide;
}
