import { writable } from 'svelte/store';

interface ProfessionalHelpData {
  // Data for professional help
}

function createProfessionalHelpStore() {
  const { subscribe, set, update } = writable<ProfessionalHelpData>({});

  return {
    subscribe,
    setProfessionalHelpData: (professionalHelpData: ProfessionalHelpData) => set(professionalHelpData),
    updateProfessionalHelpData: (cb: (professionalHelpData: ProfessionalHelpData) => ProfessionalHelpData) =>
      update(cb),
  };
}

export const professionalHelpStore = createProfessionalHelpStore();
