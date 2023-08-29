export interface GuideData {
  primary?: Weapon;
  secondary?: Weapon;
  perks?: Array<string[]>;
  equipment?: Equipment;
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
