import { useIsFetching } from "react-query";

export function Loading() {
  const isFetching = useIsFetching();
	console.log('isFetching', isFetching)

  if (isFetching) {
    return <h1>is Fetching ...</h1>;
  }
  return null;
}
