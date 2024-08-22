import { CircleSlash } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { Progress } from "./components/ui/progress";

function App() {
	const [error, setError] = useState("");

	const [file, setFile] = useState<File | null>(null);
	const [email, setEmail] = useState("");

	const upload = async (e: React.FormEvent<HTMLFormElement>) => {
		setError("");
		e.preventDefault();
		if (!file) {
			setError("Please select a file to upload!");
			return;
		}

		if (!email || !email.includes("@")) {
			setError("Please enter a valid email address!");
			return;
		}

		//API call via axios and show progress bar
	};

	return (
		<main className="w-full max-w-screen-lg mx-auto flex flex-col mt-10 rounded-lg  min-h-[500px] p-10 ">
			<h1 className="text-3xl font-semibold">Upload Service</h1>
			<h4 className="text-muted-foreground text-sm">
				No questions asked. Just free storage.
			</h4>
			<form
				className="mt-10 flex flex-col gap-4 max-w-[500px]"
				onSubmit={upload}
			>
				{!!error && (
					<Alert variant="destructive">
						<CircleSlash className="size-4" />
						<AlertTitle>Heads up!</AlertTitle>
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}
				<Input
					type="file"
					placeholder="Select a file to upload"
					onChange={(e) => {
						console.log(e.target.files);
						setFile(e.target.files?.[0] ?? null);
					}}
				/>
				<Input
					type="text"
					placeholder="Enter a valid email address"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="text-muted-foreground text-sm -mt-2">
					We are going to send you a special link to download a file. <br />
					That is the only way to download the file.
				</p>
				<Button type="submit">Upload</Button>
			</form>
			<Progress className="max-w-[500px] mt-10" value={25} />
		</main>
	);
}

export default App;
