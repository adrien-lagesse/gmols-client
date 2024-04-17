import useCompound from "@/hooks/useCompound";



export default function CompoundSummary({ cid }: { cid: number }) {
	const { compound, error, isLoading } = useCompound(cid);
	return (
		<section className="p-2 w-64">
			<p className="ms-2 text-sm text-center">Name</p>
			<div className="h-[1px] bg-slate-500 w-full mb-2" />
			<p className="font-[neon] font-extralight mx-2 text-xs">{compound?.name? compound.name: "Not Found"}</p>
            <p className="mt-3 ms-2 text-sm text-center">IUPAC Name</p>
			<div className="h-[1px] bg-slate-500 w-full mb-2" />
			<p className="font-[neon] font-extralight mx-2 text-xs">{compound?.iupac_name? compound.iupac_name: "Not Found"}</p>
			<p className="mt-3 ms-2 text-sm text-center">CID</p>
			<div className="h-[1px] bg-slate-500 w-full mb-2" />
			<p className="font-[neon] font-extralight mx-2 text-xs">{compound?.cid? compound.cid: "Not Found"}</p>
			<p className="mt-3 ms-2 text-sm text-center">Formula</p>
			<div className="h-[1px] bg-slate-500 w-full mb-2" />
			<p className="font-[neon] font-extralight mx-2 text-xs">
				{compound?.molecular_formula? compound.molecular_formula: "Not Found"}
			</p>
			<p className="mt-3 ms-2 text-sm text-center">Description</p>
			<div className="h-[1px] bg-slate-500 w-full mb-2" />
			<p className="font-[neon] font-extralight mx-2 text-xs">
				{compound?.description? compound.description: "Not Found"}
			</p>
		</section>
	);
}
