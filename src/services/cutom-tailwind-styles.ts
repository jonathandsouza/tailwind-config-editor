import useSWR from "swr";

const fetcher = (url: string) =>
	fetch("/api/tailwind").then((res) => res.text());

export const useCustomTailwindStyles = () => {
	const { data, error, isLoading } = useSWR("/api/user", fetcher);

	return {
		data,
		error,
		isLoading,
	};
};
