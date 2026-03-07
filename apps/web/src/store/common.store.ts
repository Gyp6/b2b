import { create } from 'zustand';

export interface CommonState {
	example: string;
	setExample: (example: string) => void;
}

export const useCommonStore = create<CommonState>((set) => ({
	example: '',
	setExample: (example: string) => set({ example }),
}));
