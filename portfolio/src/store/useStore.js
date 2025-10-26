import { create } from 'zustand';

const useStore = create((set) => ({
  activeNav: '#home',
  setActiveNav: (nav) => set({ activeNav: nav }),
}));

export default useStore;
