import { Badge,Button, Card, TextInput, Title } from "@tremor/react";
import React, { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateNewUser() {
	const [result, setResult] = useState<"ok" | "ko" | null>(null);
	const { addUser } = useUserActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
    setResult(null)
		const form = event.target;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("git") as string;

		if (!name || !email || !github) {
			return setResult("ko");
		}
		setResult("ok");
		addUser({ name, email, github });
		form.reset();
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Ingrese un nuevo usuario</Title>

			<form onSubmit={handleSubmit}>
				<TextInput placeholder="Ingrese el nombre" name="name" />
				<TextInput placeholder="Ingrese el correo" name="email" />
				<TextInput placeholder="Ingrese el github" name="git" />
				<div>
					<Button type="submit" style={{ marginTop: "16px", width: "auto" }}>
						Crear Usuario
					</Button>
          <span>
          {result === 'ko' && <Badge style={{color:'red'}}>Error con los campos</Badge>}
          {result === 'ok' && <Badge style={{color:'green'}}>Guardado correctamente</Badge>}
        </span>
				</div>
			</form>
		</Card>
	);
}
