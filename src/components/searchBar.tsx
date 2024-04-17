"use client";
import { type ChangeEvent, createRef, type FormEvent, useState } from "react";

type SearchHandler = (searchValue: string) => void;

export default function SearchBar({ onSearch }: { onSearch: SearchHandler }) {
	const [inputValue, setInputValue] = useState<string>("");
    const inputElementRef = createRef<HTMLInputElement>()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setInputValue(e.target.value);
	};

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		onSearch(inputValue);
		setInputValue("");
        inputElementRef?.current?.blur();
	};

	return (
		<form
			onSubmit={handleSearch}
			className="group rounded-full border flex items-center focus-within:border-cyan-700"
		>
			<input
                ref={inputElementRef}
				type="text"
				placeholder="Compound CID"
				onChange={handleChange}
				value={inputValue}
				className="outline-none w-full mx-4 my-2 caret-cyan-700"
			/>
			<button
				type="submit"
				className="px-4 hover:bg-slate-100 group-focus-within:text-cyan-800 rounded-r-full h-full"
			>
				<p className="p-2">Search</p>
			</button>
		</form>
	);
}
