import { Disease } from '../../types/medical';
import { metabolicDiseases } from './metabolic';
import { endocrineDiseases } from './endocrine';
import { liverDiseases } from './liver';
import { kidneyDiseases } from './kidney';
import { vascularDiseases } from './vascular';
import { musculoskeletalDiseases } from './musculoskeletal';
import { dermatologicalDiseases } from './dermatological';
import { gastrointestinalDiseases } from './gastrointestinal';
import { oncologicalDiseases } from './oncological';
import { gynecologicalDiseases } from './gynecological';
import { respiratoryDiseases } from './respiratory';
import { immunologicalDiseases } from './immunological';
import { neurologicalDiseases } from './neurological';

// Combine all diseases into a single array
export const diseases: Disease[] = [
  ...metabolicDiseases,
  ...endocrineDiseases,
  ...liverDiseases,
  ...kidneyDiseases,
  ...vascularDiseases,
  ...musculoskeletalDiseases,
  ...dermatologicalDiseases,
  ...gastrointestinalDiseases,
  ...oncologicalDiseases
  ...gynecologicalDiseases
  ...respiratoryDiseases
  ...immunologicalDiseases
  ...neurologicalDiseases
];