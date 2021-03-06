import { Action, Reducer, createReducer, CaseReducers } from "@reduxjs/toolkit";
import { ExtractType } from "./Actions";

export type ReducerCase<State, A extends Action> = [
  ExtractType<A>,
  (state: State, action: A) => void
];

export class ReducerBuilder<State, Actions extends Action> {
  readonly cases: Array<ReducerCase<State, Actions>>;
  readonly initialState: State;

  static create<State>(initialState: State): ReducerBuilder<State, never> {
    return new ReducerBuilder<State, never>(initialState, []);
  }

  private constructor(
    initialState: State,
    cases: Array<ReducerCase<State, Actions>>
  ) {
    this.initialState = initialState;
    this.cases = cases;
  }

  addCase<A extends Action>(
    ...[type, func]: ReducerCase<State, A>
  ): ReducerBuilder<State, Actions | A> {
    const cases = [...this.cases, [type, func]] as Array<
      ReducerCase<State, Actions | A>
    >;
    return new ReducerBuilder<State, Actions | A>(this.initialState, cases);
  }

  build(): Reducer<State, Actions> {
    const cases: CaseReducers<
      State,
      Record<string, Actions>
    > = this.cases.reduce(
      (obj, [type, func]) => {
        obj[type] = (state: State, action: Actions) => {
          func(state, action);
          return state;
        };
        return obj;
    },
      {} as any
    );
    return createReducer(this.initialState, cases);
  }
}
