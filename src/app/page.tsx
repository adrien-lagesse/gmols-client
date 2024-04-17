"use client";
import CompoundSummary from "@/components/compoundSummary";
import SearchBar from "@/components/searchBar";
import { useState } from "react";

export default function Home() {
	const [searchValue, setSearchValue] = useState<string>("");

	return (
		<main>
			<div className="p-8">
				<SearchBar onSearch={setSearchValue} />
			</div>
			<CompoundSummary cid={Number.parseInt(searchValue)}/>
		</main>
	);
}
