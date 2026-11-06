import * as api from '@lp-labs/character-frequency-map';
import { characterCounts } from '@lp-labs/character-frequency-map';
console.log(characterCounts('banana'));
// @ts-expect-error invalid argument must be rejected by declarations
api.characterCounts(1);
