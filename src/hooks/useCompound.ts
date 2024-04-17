import useSWR, {type Fetcher} from "swr"

interface CompoundSummaryScheme {
	cid: number;
	name: string | null;
	iupac_name: string | null;
	description: string | null;
	molecular_formula: string;
}

const fetcher: Fetcher<CompoundSummaryScheme, URL> = (url) => fetch(url).then(res => res.json())

export default function useCompound(cid: number){
    const { data, error, isLoading } = useSWR(`http://localhost:3001/search/${cid}`, fetcher, {})
    return {compound: data, error, isLoading }
}