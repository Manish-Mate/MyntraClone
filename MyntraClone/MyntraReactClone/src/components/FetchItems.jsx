import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../stores/itemsSlice";
import { fetchActions } from "../stores/fetchStatusSlice";

export const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  //   console.log(fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchActions.markFetchDone());
        dispatch(fetchActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
        //console.log(items);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
