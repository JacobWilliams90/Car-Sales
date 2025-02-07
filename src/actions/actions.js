export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function removeFeature(feature) {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
}

export function buyItem(item) {
  return {
    type: BUY_ITEM,
    payload: item
  };
}
