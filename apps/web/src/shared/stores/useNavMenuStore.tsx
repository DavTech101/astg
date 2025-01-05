'use client';

import { create } from 'zustand';

//##########################################################################################
// NAV MENU STORE TYPES
//##########################################################################################
type TNavMenuStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  activeMenu: any | null;
};

//##########################################################################################
// NAV MENU STORE
//##########################################################################################
const useNavMenuStore = create<TNavMenuStore>((set) => ({
  isOpen: true,
  activeMenu: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, activeMenu: null }),
}));

export default useNavMenuStore;
