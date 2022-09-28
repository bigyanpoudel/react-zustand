import create from "zustand";

export interface MethodTypes<T> {
  (payload: T): void;
}
export interface MethodsTypes<I, T> {
  (dataId: I, payload: T): void;
}

export type IncludeId = { id?: number | string };

export interface IGenericStore<T, I> {
  state: {
    isLoading?: boolean;
    data?: T | T[];
  };
  getData?: () => any;
  add: MethodTypes<T>;
  create: MethodTypes<T>;
  delete: MethodTypes<I>;
  update: MethodsTypes<I, T>;
  fetch?: (url: string) => void;
}

export interface IUser {
  name?: string;
  age: number;
}

export const useUserStore = create<IGenericStore<IUser, IncludeId>>(
  (set, get: any) => ({
    state: {},
    getData: () => {
      return get()?.state;
    },
    create: (data) => {},
    update: (id, data) => {
      // console.log("id",id.)
    },
    delete: () => {},
    add: (data) => {
      const prevState = get()?.state;
      const prevData = prevState.data;
      set((prev) => ({
        ...prev,
        state: {
          ...prev.state,
          data: [...prevData, data],
        },
      }));
    },
  })
);
