import ActionTypeFromObject from "../ActionType";

const CHAPTER_CHANGE = "Chapter/CHAPTER_CHANGE" as const;

export const ChapterStore = {
  chapterChange(to: number) {
    return {
      type: CHAPTER_CHANGE,
      payload: to
    };
  }
};
type ActionType = ActionTypeFromObject<typeof ChapterStore>;
interface ChapterType {
  chapter: number;
}
const initialState: ChapterType = {
  chapter: 0
};
export default function(state = initialState, action: ActionType): ChapterType {
  switch (action.type) {
    case CHAPTER_CHANGE:
      return {
        chapter: action.payload
      };
    default:
      return state;
  }
}
